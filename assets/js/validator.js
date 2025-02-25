// Đối tượng Validator
function Validator(options) {
  let formElement = document.querySelector(options.form);
  let selectorRules = {};

  // Hàm thực hiện validate
  function validate(inputElement, rule) {
    let rules = selectorRules[rule.selector];
    let errorElement = getParent(
      inputElement,
      options.formGroupSelector
    )?.querySelector(options.errorSelector);
    let errorMessage;

    for (let i = 0; i < rules.length; i++) {
      errorMessage = rules[i].test(inputElement.value);
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, options.formGroupSelector).classList.add(
        "invalid"
      );
    } else {
      errorElement.innerHTML = "";
      getParent(inputElement, options.formGroupSelector).classList.remove(
        "invalid"
      );
    }

    return !errorMessage;
  }

  if (formElement) {
    // Xử lý submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();

      let isFormValid = true;

      options.rules.forEach(function (rule) {
        let inputElement = formElement.querySelector(rule.selector);
        let isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        if (typeof options.submitHandler === "function") {
          let formValues = Array.from(
            formElement.querySelectorAll("[name]")
          ).reduce((values, input) => {
            switch (input.type) {
              case "checkbox":
                // Nếu là checkbox, lấy giá trị chỉ khi checkbox được chọn
                if (input.checked) {
                  if (Array.isArray(values[input.name])) {
                    values[input.name].push(input.value);
                  } else {
                    values[input.name] = [input.value];
                  }
                }
                break;
              case "radio":
                if (input.checked) {
                  values[input.name] = input.value;
                }
                break;
              case "select-one":
              case "select-multiple":
                // Nếu là select, lấy giá trị của option đã chọn
                values[input.name] = Array.from(input.selectedOptions).map(
                  (option) => option.value
                );
                break;
              case "textarea":
                // Nếu là textarea, lấy giá trị nhập vào
                values[input.name] = input.value;
                break;
              default:
                // Đối với các trường khác, lấy giá trị thông thường
                values[input.name] = input.value;
            }
            return values;
          }, {});

          // console.log("Form values:", formValues);

          options.submitHandler(formValues);
        } else {
          formElement.submit();
        }
      }
    };

    // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input)
    options.rules.forEach(function (rule) {
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule);
      } else {
        selectorRules[rule.selector] = [rule];
      }

      let inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        // Xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        // Xử lý mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          let errorElement = getParent(
            inputElement,
            options.formGroupSelector
          )?.querySelector(options.errorSelector);
          if (errorElement) {
            errorElement.innerText = "";
          }
          getParent(inputElement, options.formGroupSelector)?.classList.remove(
            "invalid"
          );
        };
      } else {
        console.error(
          `Input element with selector "${rule.selector}" not found`
        );
      }
    });
  }
}

// Hàm lấy element cha của element hiện tại
function getParent(element, selector) {
  while (element.parentElement) {
    if (element.parentElement.matches(selector)) {
      return element.parentElement;
    }
    element = element.parentElement;
  }
  return null; // Nếu không tìm thấy phần tử cha
}

// Các phương thức của đối tượng Validator
Validator.isRequired = function (selector, text) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : text;
    },
  };
};

Validator.isEmail = function (selector, text) {
  return {
    selector: selector,
    test: function (value) {
      let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : text;
    },
  };
};

Validator.minLength = function (selector, min, text) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min ? undefined : text;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, text) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue() ? undefined : text;
    },
  };
};
