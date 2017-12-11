
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Quotes').insert([
        {quote: "One day? Or day one. You decide.", img: "https://www.backpackerguide.nz/wp-content/uploads/2017/11/mountains-2186080_12803.jpg", writer: "unknown", heart: false, category_id: 1},
        {quote: "1 Year = 365 Opportunities.", img: "https://i.pinimg.com/564x/e3/25/96/e325965a7c7e2f9b8b0ce1611ea6744c.jpg", writer: "unknown", heart: false, category_id: 1},
        {quote: "You're speed doesn't matter foward is foward.", img: "https://i.pinimg.com/564x/04/e8/13/04e81374bd0b8a960c6a55bc12d46dae.jpg", writer: "Kate", heart: false, category_id: 1},
        {quote: "It always seems impossible until it's done.", img: "https://cdn.dribbble.com/users/5115/screenshots/670632/check2.jpg", writer: "Nelson Mandela", heart: false, category_id: 1},
        {quote: "Do what you have to do until you can do what you want to do.", img: "http://www.motivationalmemo.com/wp-content/uploads/2015/04/2015-02-28-dreamlifecropped-thumb.jpg", writer: "Oprah Winfrey", heart: false, category_id: 1},
        {quote: "All relationships have one law. Never make the one you love feel alone, especially when you're there.", img: "https://img.huffingtonpost.com/asset/5745f7271200002e008947fb.jpeg?ops=scalefit_970_noupscale", writer: "unknown", heart: false, category_id: 1},
        {quote: "Communicate. Even when it's uncomfortable or uneasy. One of the best ways to heal, is simply getting everything out.", img: "http://www.youthvillage.co.za/wp-content/uploads/2016/08/couple1.jpg", writer: "LiveHappy", heart: false, category_id: 2},
        {quote: "When a person tells you that you hurt them, you don't get to decide that you didn't.", img: "https://i.ytimg.com/vi/hlSC_SU8YW8/maxresdefault.jpg", writer: "unknown", heart: false, category_id: 2},
        {quote: "Maybe it won't work out. But maybe seeing it if does will be the best adventure ever.", img: "https://i.pinimg.com/564x/36/2f/c0/362fc091ab923de6a1c1a0c0d0cbad14.jpg", writer: "unknown", heart: false, category_id: 2},
        {quote: "Raise your words not your voice. It's rain that grows flowers not thunder.", img: "https://i.pinimg.com/564x/d8/13/4c/d8134cdc3520c88306da9e90345a77f2.jpg", writer: "Rumi", heart: false, category_id: 2},
        {quote: "No relationship is all sunshine. But two people can share one umbrella and survive the storm together.", img: "https://i.pinimg.com/564x/19/c5/e2/19c5e2ec749e44e1740efffc609b982d.jpg", writer: "extramadness", heart: false, category_id: 2},
        {quote: "Coffee in one hand. Confidence in the other.", img: "https://i.pinimg.com/564x/79/7a/30/797a30044d5d225a526196f25272cb19.jpg", writer: "#bossbabe", heart: false, category_id: 3},
        {quote: "I found I was more confident when I stopped trying to someone else's definition of beautiful and started being my own.", img: "https://cdn-images-1.medium.com/max/1920/1*66vHaCDGYsoF4i0ZvmSQiA.jpeg", writer: "Remington Miller", heart: false, category_id: 3},
        {quote: "Doubt kills more dreams. Than failure ever will.", img: "https://i.pinimg.com/564x/fd/d7/50/fdd750deacd573abda33fc0cc471a336.jpg", writer: "Suzy Kassem", heart: false, category_id: 3},
        {quote: "Self confidence is a super power. Once you start to believe in yourself, magic starts happening.", img: "https://thumbs.dreamstime.com/z/silhouettes-people-dancing-gold-glitter-background-couple-95326201.jpg", writer: "unknown", heart: false, category_id: 3},
        {quote: "Stop doubting yourself, work hard, and make it happen.", img: "https://media.mnn.com/assets/images/2015/11/cat%20with%20lion%20shadow.jpg.696x0_q80_crop-smart.jpg", writer: "unknown", heart: false, category_id: 3},
        {quote: "While we try to teach or children all about life, or children teach us what life is all about.", img: "https://i.pinimg.com/564x/88/35/7a/88357a77a351be606e70a3f802f9da93.jpg", writer: "Angela Schwindt", heart: false, category_id: 4},
        {quote: "Family is not important. It's everything.", img: "https://i.pinimg.com/564x/bc/68/e5/bc68e519f18bd3c3a1a8bb4d4618b110.jpg", writer: "Michael J. Fox", heart: false, category_id: 4},
        {quote: "Famiy. Where life beings. And love never ends.", img: "https://i.pinimg.com/564x/69/10/41/691041c439ae848f4340e2a720a2e1eb.jpg", writer: "unknown", heart: false, category_id: 4},
        {quote: "It's not what we have in life. But who we have in our life that matters.", img: "https://cdn.divestopedia.com/images/uploads/human-people-person-hand.jpg?height=580&width=940&mode=crop", writer: "unknown", heart: false, category_id: 4},
        {quote: "When we have each other, we have everything.", img: "http://2.bp.blogspot.com/-aabd1qmBObU/VKLBdQ2T42I/AAAAAAAABpc/b2nH1VXU-b8/s1600/2014-19-10%2Bgroup%2Bhug.jpg", writer: "unknown", heart: false, category_id: 4},
        {quote: "When your life gets blurry adjust your focus", img: "https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_2560,w_2560/v1404231459/user-367436/submissions/wcmb4myfzmckgddejfyo.jpg", writer: "unknown", heart: false, category_id: 5},
        {quote: "I'm not telling you its going to be easy. I'm telling you its going to be worth it.", img: "http://www.leonlogothetis.com/wp-content/uploads/2015/03/inspiration-640x480.jpg", writer: "Arthur L. Williams", heart: false, category_id: 5},
        {quote: "Life takes on meaning when you become motivated, set goals and charge after them in an unstoppable manner.", img: "https://imprific.com/wp-content/uploads/2016/07/3026089-poster-p-1-ask-the-experts-how-do-i-find-the-motivation-to-get-to-the-next-stage-of-my-400x225.jpg", writer: "Les Brown", heart: false, category_id: 5},
        {quote: "There are two primary choices in life; to accept conditions as they exist, or to accept the responsibility for changing them.", img: "http://www.martinbrown.co.za/wp-content/uploads/2015/02/decisions-and-choices-e1489684063974.jpg", writer: "Dennis Waitley", heart: false, category_id: 5},
        {quote: "Our greatest fear should not be of failure but of succeeding at things in life that don’t really matter.", img: "http://atychiphobia.net/wp-content/uploads/2017/02/fear-failure-1024x537-800x445.jpg", writer: "Franis Chan", heart: false, category_id: 5}

      ]);
    });
};
