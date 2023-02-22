function vergiHesapla(){
    var aractipi,aracgucu,aracyıl
    var odenecekvergi
    var i

    for(i=0;i<document.getElementById("aractipi").length;i++){
        if(document.getElementById("aractipi").options[i].selected){
            aractipi=document.getElementById("aractipi").options[i].value;
        }
    }

    for(i=0;i<document.getElementsByName("motorgucu").length;i++){
        if(document.getElementsByName("motorgucu")[i].checked){
            aracgucu=document.getElementsByName("motorgucu")[i].value;
        }
    }
    for(i=0;i<document.getElementById("aracyili").length;i++){
        if(document.getElementById("aracyili").options[i].selected){
            aracyili=document.getElementById("aracyili").options[i].value;
        }
    }
    
    // arac tipine baglı odenecek vergi
    if(aractipi=="motorsiklet"){
        odenecekvergi=100
    }
    else if(aractipi=="otomobil"){
        odenecekvergi=200
    }
    //arac gucu vergi eklenmesi
    if(aracgucu=="999cc"){
        odenecekvergi=odenecekvergi+50
    }
    else if(aracgucu=="1000cc-1600cc"){
        odenecekvergi=odenecekvergi+100
    }
    else if(aracgucu=="1601cc-2000cc"){
        odenecekvergi=odenecekvergi+150
    }
    else if(aracgucu=="2001cc"){
        odenecekvergi=odenecekvergi+200
    }
    //arac yılına baglı vergi tutarı
    if(aracyili>1997 && aracyili<=2004){
        odenecekvergi=odenecekvergi+50
    }
    else if(aracyili>2004 && aracyili<=2011){
        odenecekvergi=odenecekvergi+100
    }
    else if(aracyili>2011 && aracyili<=2018){
        odenecekvergi=odenecekvergi+150
    }
    else if(aracyili>2018 && aracyili<=2023){
        odenecekvergi=odenecekvergi+200
    }

    document.getElementById("sonuc").innerHTML="Odemeniz gereken toplam vergi tutarı:"+" "+odenecekvergi
}