function go(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const t=document.getElementById('page-'+id);
  if(t){t.classList.add('active');window.scrollTo({top:0,behavior:'smooth'})}
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.dataset.p===id));
  document.querySelectorAll('.mob-nav a').forEach(a=>a.classList.toggle('active',a.dataset.m===id));
}
function toggleMob(){document.getElementById('mn').classList.toggle('open')}
function closeMob(){document.getElementById('mn').classList.remove('open')}
go('home');

function openModal() {
    document.getElementById('fcModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('fcModal').style.display = 'none';
}

window.onclick = function(event) {
    let modal = document.getElementById('fcModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}