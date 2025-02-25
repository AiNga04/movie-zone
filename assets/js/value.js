// Lấy dữ liệu người dùng từ localStorage, hoặc sử dụng dữ liệu mặc định
const users = JSON.parse(localStorage.getItem("users")) || [
  {
    fullname: "admin",
    email: "admin@gmail.com",
    password: "admin",
    confirm_password: "admin",
    terms: ["on"],
  },
  {
    fullname: "user",
    email: "user@gmail.com",
    password: "user",
    confirm_password: "user",
    terms: ["on"],
  },
];

// Hàm đăng nhập
function login(email, password) {
  return new Promise(function (resolve, reject) {
    let user = users.find(function (user) {
      return user.email === email && user.password === password;
    });

    if (!user) {
      reject("Email or password is incorrect.");
    } else {
      resolve(user);
    }
  });
}

// Lắng nghe sự kiện submit form đăng nhập
document
  .querySelector("#form-sign-up")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    login(email, password)
      .then(function (user) {
        alert("Login successfully!");
        console.log(user);
      })
      .catch(function (error) {
        alert(error);
      });
  });

// Lắng nghe sự kiện submit form đăng ký
document
  .querySelector("#form-sign-up")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let fullname = document.querySelector("#fullname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let terms = document.querySelector("#terms").value;

    // Đăng ký người dùng mới
    register({
      fullname: fullname,
      email: email,
      password: password,
      confirm_password: password,
      terms: terms,
    })
      .then(function (users) {
        alert("Register successfully!");
        console.log(users);
        // Sau khi đăng ký thành công, tự động đăng nhập ngay
        login(email, password)
          .then(function (user) {
            alert("Login successfully!");
            console.log(user);
          })
          .catch(function (error) {
            alert(error);
          });
      })
      .catch(function (error) {
        alert(error);
      });
  });

// Hàm đăng ký người dùng
function register(data) {
  return new Promise(function (resolve, reject) {
    let user = users.find(function (user) {
      return user.email === data.email;
    });

    if (user) {
      reject("Email already exists.");
    } else {
      users.push(data);
      // Lưu người dùng vào localStorage
      localStorage.setItem("users", JSON.stringify(users));
      resolve(users);
    }
  });
}
