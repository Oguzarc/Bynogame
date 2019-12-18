<template>
<b-container class="boyut">
    <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="light">
            Üyeliğime nasıl para ekleyebilirim?
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-1"  accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="light">Nasıl alışveriş yapabilirim?</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text1 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 variant="light">Kredi kartı ile nasıl alışveriş yapabilirim?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text2 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-4 variant="light">Saat kaça kadar ürün alabilirim?</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text3 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-5 variant="light">Nasıl üye olabilirim?</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text4 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-6 variant="light">Item, Char satışınız-takasınız var mı?</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text5 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-7 variant="light">GB Fiyatları değişiyor, ucuz fiyattan nasıl alabilirim?</b-button>
      </b-card-header>
      <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text6 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-8 variant="light">Ben size para yatırdım diyelim. Siz bunu nasıl anlayacaksınız?</b-button>
      </b-card-header>
      <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text7 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-9 variant="light">Size şu an para yatırabilir miyim? ( Pazar akşamı Saat 22:30 )</b-button>
      </b-card-header>
      <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text8 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</b-container>
</template>

<script>
  export default {
    data() {
      return {
        text3: `
• ByNoGame tatil yapmaz. E-Pin (kod) GB, Key, Skin, item fark etmez 7gün 24saat dilediğiniz an satın alabilirsiniz.

• ATM’lerden günün her saatinde nakit, KARTSIZ, masrafsız ödeme yapabilirsiniz
.
        `,
        text:`Sağ üst kısımda yer alan Bakiye Yükle butonuna tıklayın ve size en 
        uygun ödeme yöntemini seçin. Ödeme işleminizi tamamladıktan sonra buradan 
        ödemenizi bildirebilirsiniz. Ardından en kısa süre içerisinde bakiyeniz ByNoGame 
        hesabınıza yüklenecektir.`,
        text1:`
            Öncelikle buraya tıklayarak sitemize üye olunuz.
            Plan 1 : Satın almak istediğiniz ürünleri alışveriş sepetinize ekleyin. 
            Ardından, satın alacağınız ürünleri sitemizde yer alan size en uygun ödeme seçeneği ile ödeyin.
            Satın alım işleminizi tamamladıktan sonra ürünlerinizi isminizin solunda yer alan 
            Menü butonuna tıkladıktan sonra Siparişlerim sekmesinde görüntüleyebilirsiniz.
            Plan 2 : Dilediğiniz miktarı buraya tıklayarak size en uygun ödeme seçeneğiyle 
            ByNoGame’e ekleyebilir, ardından dilediğiniz ürünü satın alabilirsiniz.
            `,
        text2:`*ByNoGame’de doğrudan kredi kartı geçmez. Düşük komisyonlu ve hızlı kredi kartı alışverişleriniz için,

 

1) Turkpara  Kredi kartı ile 3D secure ile kullanıcılarımıza sunmuş olduğumuz  YENİ Sanal Pos Sistemidir.  

• Cep Telefonunuza gelen doğrulama kodunu Güvenilir Sanal Pos ortamında giriş yaparak Kredi kartnızla ödeme yapabilirsiniz.

 

 

 2) PayU

• PayU uluslarası bir Sanal Pos ile ödeme şirketidir.
• %1.5 gibi düşük bir oran ile kredi kartınızla anında ödeme yapabilirsiniz.

PayU ile ödeme yapmak için tıklayın.

3) Sonteklif

• Eğer Sonteklif sistemine üye değilseniz, öncelikle buraya tıklayarak Sonteklif sistemine üye olunuz. Sonrasında ByNoGame mağazasından dilediğiniz ürünü ödeme yaparak satın alabilirsiniz.
• Sonteklif ByNoGame bakiye ödemelerinizi sitemiz üzerinden de yapabilirsiniz.
• Bu şekilde sitemizdeki bağlantıdan satın almayı başlatırsınız. Ödeme bildirimi yapmak zorunda kalmazsınız, bakiyeniz sistem tarafından otomatik aktarılır. Bununla ilgili bir onay mesajını sistemimiz sohbet sayfanıza gönderir.
*Değerli Üyemiz: Fiyatlardaki farklı oranlar Sonteklif Sitesi’nin uyguladığı %3.5 oranından kaynaklanmaktadır. Bizim hesabımıza giren fazlalık bir para söz konusu değildir.

Sonteklif ile ödeme yapmak için tıklayın.

4) G2A

• G2A, öncelikli olarak yabancı ülkelerde yaşayan kullanıcılarımız için bir ödeme seçeneğidir. İçerisinde pek çok ödeme seçeneği bulundurur.
• Sistem içerisinde yer alan 0 komisyonlu G2A Wallet, OneCard, Bitcoins, Kredi Kartları, PayPal, CashU, Skrill ve Alipay ödeme seçenekleri ile ödeme yapabilirsiniz.

G2A ile ödeme yapmak için tıklayın.


5) GPay

• GPAY ortak çalıştığımız bankalar için kullanıcılarımıza sunmuş olduğumuz Sanal Pos Sistemidir.
• Cep Telefonunuza gelen doğrulama kodunu Güvenilir Sanal Pos ortamında giriş yaparak Kredi kartınız veya banka kartnızla ödeme yapabilirsiniz.
• Bankalar Arası En güvenilir Sistemlerden olan GPAY Ödeme sistemi Bankanızın ara yüzüne yönlendirdiği Sanal Pos uygulamasıyla %100 güvenli ve hızlıdır.
• Finansal bilgileriniz GPay deneyimi ve teknolojisi ile güvence altında. İçiniz rahat olsun!

GPay ile ödeme yapmak için tıklayın.


`,
        text4:`ByNoGame’e üye olmak ücretsizdir. Sağ üst tarafta yer alan Üye Ol butonuna tıkladıktan sonra,
         sizden istenilen bilgileri eksiksiz şekilde doldurarak üye olabilirsiniz.`,

        text5:`• ByNoGame asla Item veya Char alımı, satışı, takası yapmaz. Oyun içinde, 
        forumlarda veya herhangi bir yerde ByNoGame ismi ile yer alan tüm ilanlar sahtedir.
        • ByNoGame sizinle oyun içinden, forumlardan veya herhangi bir yerden asla konuşmaz. 
        ByNoGame ile yalnızca Canlı Destek kısmından konuşabilirsiniz.
        • "Ben ByNoGame bayisiyim", "Ben ByNoGame satıcısıyım", "Ben ByNoGame çalışanıyım", 
        "Ben ByNoGame sahibiyim" tarzında konuşarak sizinle Item ve Char dolandırıcılığı için 
        iletişime geçmeye çalışan kişilere itibar etmeyiniz. 
        Item ve Char’ınızı kesinlikle başkalarına vermeyiniz.`,

        text6:`

        GB fiyatları pek çok parametreye göre sistem tarafından otomatik olarak sürekli güncellenmektedir. 
        Fiyatlara manuel olarak müdahale yoktur ve fiyat hareketinin yönü tahmin edilemez. 
        En ucuz fiyatlarla GB satın almak için ByNoGame’i takipte kalınız...
        `,

        text7:`

        • Ödeme yaptığınıza dair size verilen makbuz - dekont ile. Yapmış olduğunuz ödemelerin dekont veya 
        makbuzunu kesinlikle saklamanızı öneriyoruz. Çünkü ödeme bildirimi yaparken makbuz - 
        dekont üzerinde yer alan bilgilere ihtiyacınız olacak.
        Ödeme Bildirimi Nedir?
        Ödeme bildirimi; ByNoGame’e yaptığınız ödemeleri, ödeme bildirimi ile ByNoGame 
        bakiyenize yansıttığınız bir sistemdir.
        `,
        text8:`
       ByNoGame’de GPay ile 7/24 (YKB 09:00-21:00), 
       geriye kalan ödeme seçenekleri ile 7/ 24   işlemlerinizi gerçekleştirebilirsiniz.
        `,
      }
    }
  }
</script>
<style scoped>
.boyut{
    margin-top: 80px;
}
</style>