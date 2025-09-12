// البيانات: الصفوف → المواد → المواعيد
const schedules = {
  primary1: {
    "ICT": ["السبت - 4 إلى 5"],
    "Math": ["الأحد - 1 إلى 2"]
  },
  primary2: {
    "ICT": ["السبت - 4 إلى 5"],
    "Math": ["الأحد - 1 إلى 2"]
  },
  primary3: {
    "ICT": ["السبت - 4 إلى 5"],
    "Math": ["الأحد - 1 إلى 2"]
  },
  primary4: {
    "ICT": ["السبت - 4 إلى 5"],
    "Math": ["الأحد - 1 إلى 2"]
  },
  primary5: {
    "Science": ["الجمعة - 3 إلى 4"],
    "English": ["الخميس - 5 إلى 6"]
  },
  primary6: {
    "ICT": ["السبت - 6 إلى 7"],
    "Arabic": ["الإثنين - 2 إلى 3"]
  },
  prep1: {
    "Math": ["الثلاثاء - 6 إلى 7"],
    "Science": ["الجمعة - 3 إلى 4"]
  },
  prep2: {
    "ICT": ["الثلاثاء - 7 إلى 8"],
    "Arabic": ["الجمعة - 4 إلى 5"]
  },
  prep3: {
    "English": ["الثلاثاء - 5 إلى 6"],
    "History": ["الجمعة - 2 إلى 3"]
  },
  sec1: {
    "Physics": ["السبت - 10 إلى 11"],
    "Math": ["الأحد - 9 إلى 10"]
  },
  sec2: {
    "Biology": ["الإثنين - 12 إلى 1"],
    "Chemistry": ["الأربعاء - 11 إلى 12"]
  },
  sec3: {
    "Math": ["الخميس - 8 إلى 9"],
    "Arabic": ["الجمعة - 9 إلى 10"]
  }
};

// عرض المواد عند اختيار الصف
function showSchedule(className) {
  const popup = document.getElementById('popup');
  const title = document.getElementById('class-title');
  const list = document.getElementById('schedule-list');

  title.innerText = className;
  list.innerHTML = "";

  if (schedules[className]) {
    Object.keys(schedules[className]).forEach(subject => {
      const div = document.createElement('div');
      div.className = "schedule-box";
      div.textContent = subject;
      div.onclick = () => showSubjectSchedule(className, subject);
      list.appendChild(div);
    });
  } else {
    list.innerHTML = "<p>لا توجد بيانات</p>";
  }

  popup.style.display = "flex";
}

// عرض مواعيد المادة
function showSubjectSchedule(className, subject) {
  const title = document.getElementById('class-title');
  const list = document.getElementById('schedule-list');

  title.innerText = subject;
  list.innerHTML = "";

  schedules[className][subject].forEach(item => {
    const div = document.createElement('div');
    div.className = "schedule-box";
    div.textContent = item;
    list.appendChild(div);
  });
}

function closePopup() {
  document.getElementById('popup').style.display = "none";
}
