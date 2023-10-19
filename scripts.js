     var score = 0
        //soru 1:
        function soru(){
            document.write("<title>MineQuiz</title>")
            document.write("<h2>1. soru:</h2>")
                document.write("<h3>Aşşağıdakilerden hangisi olta için malzemelerdir?</h3>")
                //bu 1. sorunun a butonu:
              var a = document.createElement("button")
              a.textContent = "A) 2 çubuk 3 ip"
              a.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru1(),score-=2}
              document.body.append(a)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun b butonu:
              var b = document.createElement("button")
              b.textContent = "B) 3 çubuk 2 ip"
              b.onclick = function(){alert("cevap doğru!"),document.body.innerText = '',soru1(),score+=2}
              document.body.append(b)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun c butonu:
              var c = document.createElement("button")
              c.textContent = "C) 2 çubuk 2 ip"
              c.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru1(),score-=2}
              document.body.append(c)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun d butonu:
              var d = document.createElement("button")
              d.textContent = "D) 3 çubuk 3 ip"
              d.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru1(),score-=2}
              document.body.append(d)
        }
        //soru 2:
        function soru1(){
            document.write("<title>MineQuiz</title>")
                document.write("<h2>2. soru:</h2>")


document.write("<h3>Aşşağıdakilerden hangisi Minecraft bu güne kadar kaç kez satın alındığını söylemektedir?</h3>")
//bu 1. sorunun a butonu:
var a = document.createElement("button")
a.textContent = "A) 2"
a.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru2(),score-=2}
document.body.append(a)
document.write("<br/>")
document.write("<br/>")
//bu 1. sorunun b butonu:
var b = document.createElement("button")
b.textContent = "B) 1"
b.onclick = function(){alert("cevap doğru!"),document.body.innerText = '',soru2(),score+=2}
document.body.append(b)
document.write("<br/>")
document.write("<br/>")
//bu 1. sorunun c butonu:
var c = document.createElement("button")
c.textContent = "C) 1.975.874.550.010 "
c.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru2(),score-=2}
document.body.append(c)
document.write("<br/>")
document.write("<br/>")
//bu 1. sorunun d butonu:
var d = document.createElement("button")
d.textContent = "D) 1.110.550.770.107"
d.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru2(),score-=2}
document.body.append(d)}
//soru 3:
function soru2(){
    document.write("<title>MineQuiz</title>")
    document.write("<h2>3. soru:</h2>")


                document.write("<h3>Aşşağıdakilerden hangisi 2023 ün en çok oynanan sunucusu hangisidir?</h3>")
                //bu 1. sorunun a butonu:
              var a = document.createElement("button")
              a.textContent = "A) Hypixel.net"
              a.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru3(),score-=2}
              document.body.append(a)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun b butonu:
              var b = document.createElement("button")
              b.textContent = "B) akumamc.net"
              b.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru3(),score-=2}
              document.body.append(b)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun c butonu:
              var c = document.createElement("button")
              c.textContent = "C) purple.wtf"
              c.onclick = function(){alert("cevap doğru!"),document.body.innerText = '',soru3(),score+=2}
              document.body.append(c)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun d butonu:
              var d = document.createElement("button")
              d.textContent = "D) play.vipermc.net"
              d.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru3(),score-=2}
              document.body.append(d)
}
function soru3(){
    document.write("<title>MineQuiz</title>")
    document.write("<h2>4. soru:</h2>")


                document.write("<h3>Aşşağıdakilerden hangisi Minecraft ın en sinir eden mobudur? 'genel olarak'</h3>")
                //bu 1. sorunun a butonu:
              var a = document.createElement("button")
              a.textContent = "A) Zombi"
              a.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru4(),score-=2}
              document.body.append(a)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun b butonu:
              var b = document.createElement("button")
              b.textContent = "B) İskelet"
              b.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru4(),score-=2}
              document.body.append(b)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun c butonu:
              var c = document.createElement("button")
              c.textContent = "C) Creeper"
              c.onclick = function(){alert("cevap doğru!"),document.body.innerText = '',soru4(),score+=2}
              document.body.append(c)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun d butonu:
              var d = document.createElement("button")
              d.textContent = "D) Enderman"
              d.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru4(),score-=2}
              document.body.append(d)
}
function soru4(){
    document.write("<title>MineQuiz</title>")
    document.write("<h2>5. soru:</h2>")


                document.write("<h3>Aşşağıdakilerden hangisi Minecraft ın en büyük Youtuberıdır?</h3>")
                //bu 1. sorunun a butonu:
              var a = document.createElement("button")
              a.textContent = "A) Dream"
              a.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru5(),score-=2}
              document.body.append(a)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun b butonu:
              var b = document.createElement("button")
              b.textContent = "B) PewDiePie"
              b.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru5(),score-=2}
              document.body.append(b)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun c butonu:
              var c = document.createElement("button")
              c.textContent = "C) TechnoBlade"
              c.onclick = function(){alert("cevap doğru!"),document.body.innerText = '',soru5(),score+=2}
              document.body.append(c)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun d butonu:
              var d = document.createElement("button")
              d.textContent = "D) Ferited"
              d.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru5(),score-=2}
              document.body.append(d)
}
function soru5(){
    document.write("<title>MineQuiz</title>")
    document.write("<h2>6. soru:</h2>")


                document.write("<h3>Aşşağıdakilerden hangisi Minecraft ta dünyada en çok bulunan bloktur</h3>")
                //bu 1. sorunun a butonu:
              var a = document.createElement("button")
              a.textContent = "A) Çim Blok"
              a.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru6(),score-=2}
              document.body.append(a)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun b butonu:
              var b = document.createElement("button")
              b.textContent = "B) Toprak"
              b.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru6(),score-=2}
              document.body.append(b)
               document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun c butonu:
              var c = document.createElement("button")
              c.textContent = "C) Ağaç Kütüğü"
              c.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru6(),score-=2}
              document.body.append(c)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun d butonu:
              var d = document.createElement("button")
              d.textContent = "D) Taş"
              d.onclick = function(){alert("cevap doğru!"),document.body.innerText = '',soru6(),score+=2}
              document.body.append(d)
}
function soru6(){
    document.write("<title>MineQuiz</title>")
    document.write("<h2>7. soru:</h2>")


                document.write("<h3>Aşşağıdakilerden hangisi Minecraft ın java sürümünü hangi yazılım dili ile kodlandığını söylemektedir?</h3>")
                //bu 1. sorunun a butonu:
              var a = document.createElement("button")
              a.textContent = "A) Java"
              a.onclick = function(){alert("cevap doğru!"),document.body.innerText = '',soru7(),score+=2}
              document.body.append(a)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun b butonu:
              var b = document.createElement("button")
              b.textContent = "B) JavaScript"
              b.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru7(),score-=2}
              document.body.append(b)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun c butonu:
              var c = document.createElement("button")
              c.textContent = "C) Python"
              c.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru7(),score-=2}
              document.body.append(c)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun d butonu:
              var d = document.createElement("button")
              d.textContent = "D) C++"
              d.onclick = function(){alert("cevap yanlış"),document.body.innerText = '',soru7(),score-=2}
              document.body.append(d)
}
function soru7(){
    document.write("<title>MineQuiz</title>")
    document.write("<h2>8. soru:</h2>")


                document.write("<h3>Aşşağıdakilerden hangisi Microsoft Mojang ı satın aldığı yılı söylemektedir?</h3>")
                //bu 1. sorunun a butonu:
              var a = document.createElement("button")
              a.textContent = "A) 2013"
              a.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru8(),score-=2}
              document.body.append(a)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun b butonu:
              var b = document.createElement("button")
              b.textContent = "B) 2015"
              b.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru8(),score-=2}
              document.body.append(b)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun c butonu:
              var c = document.createElement("button")
              c.textContent = "C) 2014"
              c.onclick = function(){alert("cevap doğru!"),document.body.innerText = '',soru8(),score+=2}
              document.body.append(c)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun d butonu:
              var d = document.createElement("button")
              d.textContent = "D) 2012"
              d.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru8(),score-=2}
              document.body.append(d)
}
function soru8(){
    document.write("<title>MineQuiz</title>")
    document.write("<h2>9. soru:</h2>")


                document.write("<h3>Aşşağıdakilerden hangisi okyanus güncellemesinin geldiği sürümü söylemektedir?</h3>")
                //bu 1. sorunun a butonu:
              var a = document.createElement("button")
              a.textContent = "A) 1.13"
              a.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru9(),score-=2}
              document.body.append(a)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun b butonu:
              var b = document.createElement("button")
              b.textContent = "B) 1.15"
              b.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru9(),score-=2}
              document.body.append(b)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun c butonu:
              var c = document.createElement("button")
              c.textContent = "C) 1.12"
              c.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',soru9(),score-=2}
              document.body.append(c)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun d butonu:
              var d = document.createElement("button")
              d.textContent = "D) 1.14"
              d.onclick = function(){alert("cevap doğru!"),document.body.innerText = '',soru9(),score+=2}
              document.body.append(d)
}
function soru8(){
    document.write("<title>MineQuiz</title>")
    document.write("<h2>9. soru:</h2>")


                document.write("<h3>Aşşağıdakilerden hangisi Minecraft ilk bosunu söylemektedir?</h3>")
                //bu 1. sorunun a butonu:
              var a = document.createElement("button")
              a.textContent = "A) Ender Dragon"
              a.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',score-=2,soru9()}
              document.body.append(a)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun b butonu:
              var b = document.createElement("button")
              b.textContent = "B) Giant"
              b.onclick = function(){alert("cevap doğru!"),document.body.innerText = '',score+=2,soru9()}
              document.body.append(b)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun c butonu:
              var c = document.createElement("button")
              c.textContent = "C) Wither"
              c.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',score-=2,soru9()}
              document.body.append(c)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun d butonu:
              var d = document.createElement("button")
              d.textContent = "D) Elder Gardiyan"
              d.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',score-=2,soru9()}
              document.body.append(d)
}
function soru9(){
    document.write("<title>MineQuiz</title>")
    document.write("<h2>10. soru:</h2>")


                document.write("<h3>Aşşağıdakilerden hangisi Minecraft ın genel yapımcısının adıdır?</h3>")
                //bu 1. sorunun a butonu:
              var a = document.createElement("button")
              a.textContent = "A) Nocth"
              a.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',score-=2,sonuc()}
              document.body.append(a)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun b butonu:
              var b = document.createElement("button")
              b.textContent = "B) jeb_"
              b.onclick = function(){alert("cevap doğru!"),document.body.innerText = '',score+=2,sonuc()}
              document.body.append(b)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun c butonu:
              var c = document.createElement("button")
              c.textContent = "C) agnes"
              c.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',score-=2,sonuc()}
              document.body.append(c)
              document.write("<br/>")
              document.write("<br/>")
              //bu 1. sorunun d butonu:
              var d = document.createElement("button")
              d.textContent = "D) Dinnerbone"
              d.onclick = function(){alert("cevap yanlış!"),document.body.innerText = '',score-=2,sonuc()}
              document.body.append(d)
}
function sonuc(){
    document.write("scorun: "+score)
}
