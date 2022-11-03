$(function () {
  // 셀렉트박스 focus 이벤트
  var selectTarget = $(".selectbox select");
  selectTarget.on({
    focus: function () {
      $(this).parent().addClass("focus");
    },
    blur: function () {
      $(this).parent().removeClass("focus");
    },
  });

  selectTarget.change(function () {
    var select_name = $(this).children("option:selected").text();
    $(this).siblings("label").text(select_name);
    $(this).parent().removeClass("focus");
  });

  // 첨부파일명 생성
  $("#bd_file").on("change", function () {
    var fileName = $("#bd_file")[0].files[0].name;
    $(".upload-name").val(fileName);
  });
});

// 팝업 보이기
function showPopup(name) {
  var popup = document.querySelector("." + name + "");
  popup.style.display = "block";
  setTimeout(() => {
    popup.classList.add("active");
  }, 10);
}

// 팝업 감추기
function closePopup(name) {
  var popup = document.querySelector("." + name + "");
  popup.classList.remove("active");
  setTimeout(() => {
    popup.style.display = "none";
  }, 200);
}
