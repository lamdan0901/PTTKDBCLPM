document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  const dropDowns = document.querySelectorAll("[data-dropdown]");

  if (!isDropdownButton) {
    for (let i = 0; i < dropDowns.length; i++) {
      const openDropdown = dropDowns[i];
      if (openDropdown.classList.contains("active")) {
        openDropdown.classList.remove("active");
      }
    }
  }

  if (!isDropdownButton && dropDowns != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

//Hiện tại chưa có event cho mỗi <li></li> khi click vào,
//chưa lấy đc data từ <li></li> đưa vào <span></span> để hiển thị
//Và chưa có event lấy data từ bên sua-lich-chieu đưa sang để chỉnh sửa
