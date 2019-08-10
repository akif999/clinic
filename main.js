$(function(){

  //文字のカウント

  $('#js-counter').keyup(function(){

    var count = $(this).val().length;

    $('.show-counter').text(count);
  });

  //名前入力フォーム
  //successで青くする
  //errorで赤くする
  //0文字の場合errorにする
  //20文字を超えるとerrorにする

  const MSG_EMPTY = 'を入力してください';
  const MSG_TEXT_MAX = '　20文字以内で入力してください';
  const MSG_EMAIL_TEXT = 'の形式で入力してください';
  const MSG_TEXTAREA_TEXT = '　100文字以内で入力してください';

  $('.valid-text').keyup(function(){

    var form_g = $(this).closest('.form-group');

    if($(this).val().length === 0){
      form_g.removeClass('success').addClass('error');
      form_g.find('.require').text(MSG_EMPTY);
    }else if($(this).val().length > 20){
      form_g.removeClass('success').addClass('error');
      form_g.find('.require').text(MSG_TEXT_MAX);
    }else{
      form_g.removeClass('error').addClass('success');
      form_g.find('.require').text('');
    }
  });

  // E-Mailのバリデーションチェック
  //successで青くする
  //errorで赤くする
  //0文字の場合errorにする
  //50文字以上またはE-Mailの形式になっていない場合errorにする

  $('.valid-email').keyup(function(){

    var form_g = $(this).closest('.form-group');

    if($(this).val().length === 0){
      form_g.removeClass('success').addClass('error');
      form_g.find('.require').text(MSG_EMPTY);
    }else if($(this).val().length > 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
      form_g.removeClass('success').addClass('error');
      form_g.find('.require').text(MSG_EMAIL_TEXT);
    }else{
      form_g.removeClass('error').addClass('success');
      form_g.find('.require').text('');
    }
  });

// テキストエリアのバリデーションチェック
//successで青くする
//errorで赤くする
//0文字の場合errorにする
//100文字以上の場合errorにする
  $('.valid-textarea').keyup(function(){

    var form_g = $(this).closest('.form-group');

    if($(this).val().length === 0){
      form_g.removeClass('success').addClass('error');
      form_g.find('.require').text(MSG_EMPTY);
    }else if($(this).val().length > 100){
      form_g.removeClass('success').addClass('error');
      form_g.find('.require').text(MSG_TEXTAREA_TEXT);
    }else{
      form_g.removeClass('error').addClass('success');
      form_g.find('.require').text('');
    }

  });


});
