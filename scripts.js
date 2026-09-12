document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('navToggle')
  var navList = document.getElementById('navList')

  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('open')
    })
  }

  document.querySelectorAll('.nav-list a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navList) navList.classList.remove('open')
      document.querySelectorAll('.nav-list a').forEach(function (a) { a.classList.remove('active') })
      link.classList.add('active')
    })
  })

  document.querySelectorAll('.card').forEach(function (card) {
    var btn = card.querySelector('.btn-sm')
    if (!btn) return
    btn.addEventListener('click', function () {
      var snippet = document.getElementById(card.dataset.toggle)
      var currentlyShown = snippet && !snippet.hidden

      document.querySelectorAll('.code-snippet').forEach(function (s) { s.hidden = true })

      if (!currentlyShown && snippet) {
        snippet.hidden = false
        btn.textContent = 'إخفاء المثال'
      } else if (btn) {
        btn.textContent = 'شاهد مثالًا'
      }
    })
  })

  var quizOptions = document.querySelectorAll('.quiz-option')
  var feedback = document.getElementById('feedback')

  if (quizOptions.length && feedback) {
    quizOptions.forEach(function (opt) {
      opt.addEventListener('click', function () {
        quizOptions.forEach(function (o) {
          o.classList.remove('correct', 'wrong')
          o.disabled = false
        })
        opt.disabled = true

        if (opt.textContent.trim() === 'h1') {
          opt.classList.add('correct')
          feedback.textContent = 'إجابة صحيحة! 🎉 h1 هو عنوان المستوى الأعلى.'
          feedback.className = 'quiz-feedback ok'
        } else {
          opt.classList.add('wrong')
          feedback.textContent = 'ليست الإجابة الصحيحة — جرّب h1 😉'
          feedback.className = 'quiz-feedback no'
        }
      })
    })
  }

  var contactForm = document.getElementById('contactForm')
  var contactNote = document.getElementById('contactNote')
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault()
      contactForm.reset()
      if (contactNote) contactNote.hidden = false
    })
  }
})