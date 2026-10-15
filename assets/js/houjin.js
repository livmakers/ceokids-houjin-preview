/* CEOキッズアカデミー 法人プログラム — フォーム補助（外部依存ゼロ）
   1) ?interest=welfare 等でお問い合わせの「ご関心」を事前チェック
   2) 送信エラー（?e=）の表示
   3) 送信までの経過秒（ボット対策。JSが無い環境では空のまま送られ、サーバー側で許容する） */
(function () {
  'use strict';
  var q = new URLSearchParams(window.location.search);

  var interest = q.get('interest');
  if (interest) {
    var box = document.querySelector('input[name="interest[]"][value="' + interest.replace(/[^a-z]/g, '') + '"]');
    if (box) { box.checked = true; }
  }

  var MSG = {
    required: '必須項目が入力されていません。',
    email: 'メールアドレスの形式をご確認ください。',
    interest: '「ご関心」を1つ以上お選びください。',
    consent: '個人情報の取扱いへの同意が必要です。',
    rate: '短時間に送信が続いたため受付を停止しています。時間をおいて再度お試しください。',
    send: '送信処理に失敗しました。時間をおいて再度お試しください。'
  };
  var e = q.get('e');
  if (e) {
    var alertBox = document.querySelector('[data-form-alert]');
    if (alertBox) {
      var lines = e.split(',').map(function (k) { return MSG[k]; }).filter(Boolean);
      if (lines.length) {
        alertBox.textContent = lines.join(' ');
        alertBox.hidden = false;
      }
    }
  }

  var t0 = Date.now();
  Array.prototype.forEach.call(document.querySelectorAll('form[data-timed]'), function (f) {
    f.addEventListener('submit', function () {
      var t = f.querySelector('input[name="elapsed"]');
      if (t) { t.value = String(Math.round((Date.now() - t0) / 1000)); }
    });
  });
})();
