(function(){
  // 학과 필터
  var f=document.querySelector('.filter');
  if(f){f.addEventListener('click',function(ev){
    var b=ev.target.closest('button');if(!b)return;
    f.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)});
    var v=b.getAttribute('data-f');
    document.querySelectorAll('#course-rail .card').forEach(function(c){
      c.classList.toggle('hide',!(v==='all'||c.getAttribute('data-cat')===v));
    });
  });}

  // 나에게 맞는 수업 찾기
  var btn=document.getElementById('finder-btn');
  if(btn){btn.addEventListener('click',function(){
    var form=document.getElementById('finder'),out=document.getElementById('finder-result');
    var g=(form.querySelector('input[name=goal]:checked')||{}).value,
        fd=(form.querySelector('input[name=field]:checked')||{}).value,
        t=(form.querySelector('input[name=time]:checked')||{}).value;
    if(!fd){out.innerHTML='관심 분야를 하나 골라 주세요.';out.classList.add('show');return;}
    var C={
      art:['게임원화·일러스트학과','#art','드로잉입문반·아트웍기초로 기본기를 다진 뒤 게임원화 과정으로'],
      '3d':['3D그래픽학과','#3d','게임그래픽 과정에서 캐릭터·배경 모델링부터'],
      dev:['게임프로그래밍학과','#dev','C#으로 코딩 기초를 익힌 뒤 유니티·언리얼로'],
      plan:['게임기획학과','#plan','게임기획 과정에서 시스템·레벨 기획서 작성부터'],
      toon:['웹툰·웹소설학과','#toon','웹툰드로잉·시나리오 또는 웹소설 기초부터'],
      ai:['AI X 크리에이터','#ai','AI 코딩 게임개발·AI 아트웍 과정으로']
    }[fd];
    var G={job:'취업이 목표라면 직무에 맞는 포트폴리오까지 이어가는 구성을 추천해요.',
      college:'입시가 목표라면 목표 대학 전형에 맞춘 실기·포트폴리오 준비를 함께 안내해 드려요.',
      hobby:'처음이라면 부담 없는 기초 단계부터 시작해 보세요.',
      side:'부업·창작이 목표라면 혼자서도 완성할 수 있는 결과물 중심으로 안내해 드려요.'}[g]||'';
    var T={weekday:'평일반',alt:'격일반(주 2~3회)',weekend:'주말반'}[t];
    out.innerHTML='<b>추천: '+C[0]+'</b><br>'+C[2]+' 시작하는 것을 추천해요. '+G+(T?' 희망하신 <b>'+T+'</b> 개설 여부는 상담에서 확인해 드릴게요.':'')+
      '<div class="btns" style="margin-top:12px"><a class="btn btn-main" href="tel:02-937-5530">전화 상담</a><a class="btn btn-line" href="/courses/'+C[1]+'">과정 자세히 보기 ↗</a></div>';
    out.classList.add('show');
  });}
})();
