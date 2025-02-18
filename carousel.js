if (window.innerWidth > 1000) {
    let index = 0;

    const imageList = [
        '<img src="res/team/all.jpg"><div class="overlay"></div><p>Our Team</p>',
        '<img src="res/team/exec.jpg"><div class="overlay"></div><p>Executive Team<br><em>Yiğit Çal (DSG) - Duru Taşan (SG) - Tuana Öztürk (DG) - Deniz Kağan Şimşek (DDG)</em></p>',
        '<img src="res/team/aca.jpg"><div class="overlay"></div><p>Academic Trainees<br><em></em></p>',
        '<img src="res/team/pr.jpg"><div class="overlay"></div><p>PR Team<br><em>Deren Çorabatır - Efe Yıldırım (Deputy Head of PR) - Hatice Başak Gedik (Head of PR) - Deniz Ezgi Ebil - Ata Özbaylar</em></p>',
        '<img src="res/team/admin.jpg"><div class="overlay"></div><p>Head of Admin<br><em>Aylin Kösem</em></p>',
        '<img src="res/team/press.jpg"><div class="overlay"></div><p>Head of Press<br><em>Ayşegül Ceylan</em></p>',
        '<img src="res/team/it.jpg"><div class="overlay"></div><p>IT Team<br><em>Adahan Topal (Head of IT) - İsmail Yiğit Özmen (Deputy Head of IT)</em></p>',
        '<img src="res/team/media.jpg"><div class="overlay"></div><p>Media Team<br><em>Onur Vatan Koruyucu - Duru Atacan</em></p>',
        '<img src="res/team/ent.jpg"><div class="overlay"></div><p>Entertainment Team<br><em>Melis Karadeniz - Ahmet Mert Tünay (Head of Entertainment) - Elif Kutay (Deputy Head of Entertainment) - Aslı Baburhan</em></p>',
        '<img src="res/team/fat.jpg"><div class="overlay"></div><p>Finance Team<br><em>Mert Kağan Aydın - Ata Yıldırım - Duru Gözmen (Deputy Head of Finance)</em></p>',
        '<img src="res/team/security.jpg"><div class="overlay"></div><p>Security<br><em>Eylül Derin Gürkan - Emre Deniz Ciğeroğlu (Head of Security)</em></p>',
    ];

    function increaseIndex(amount) {
        index = (index + amount + imageList.length) % imageList.length;
        display();
    }

    function display() {
        document.querySelector('.carousel .image-container').innerHTML = imageList[index];
    }
}