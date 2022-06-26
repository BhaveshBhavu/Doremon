
var boxu = document.getElementById('box')


boxu.innerHTML += `<log>
        <img src="https://www.freepnglogos.com/uploads/doraemon-png/doraemon-keren-kumpulan-vector--5.png" alt="">
        <b> <i>D</i>oraemon</b>
      </log>

 <div class = "menu_box" >

   <i class="fa-solid fa-bars" id="ho"></i>

   <ul >
   <li><a href="index.html" id="blue_">Movie</a></li> 
   <li> <a href="https://www.dailymotion.com/video/x81hqqi">Episodes</a> </li> 
   <li> <a href="image.html">Image</a> </li> 
   <li> <a href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.amazon.in/Toys-Games-doraemon/s%3Frh%3Dn%253A1350380031%252Cp_lbr_characters_browse-bin%253Adoraemon&ved=2ahUKEwiFpJf6raz3AhWkklYBHc9LD-QQFnoECA4QAQ&usg=AOvVaw0RY6teMCyF3MDrB2-rtMDn">Toys</a> </li> 
   <li> <a href="video.html">videos</a> </li> 
   </ul>

</div>`

 
  
// new  idia start  
  
  
  
  for (var o = 0; o < 44 /*51*/ ; o++) {
  
    // movie poster 
    var img = new Array('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJP4JxGfZC-30k1bEr4UUus_wl6kXYExRANjMwNEqTFUgppAw-tkwuy4&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-IkwNw13zlC8TeIV3e9LN_Mn0JcYNy_Z1uQ&usqp=CAU', 'https://static.tvtropes.org/pmwiki/pub/images/capture_660.PNG', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXltevQNZhS9wFgnb_lb3nK8VovW__leLL-Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjOy24GD89HAkvuWWBq3wyJi3pWs9HGqvyKQMjG0d2i4239g-ZuaObj5x&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVbczy3YUVN0zKjXeiyektHLqXS8c_WNxmPoqJ_0tdweXZ-qpFzQeb_n5&s=10', 'https://upload.wikimedia.org/wikipedia/en/f/fd/Nobita_and_Galactic_Express.jpg', 'https://upload.wikimedia.org/wikipedia/en/a/a0/Nobita_and_the_Wind_Wizard.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ40aDQgjB2LeW4ynHQvX27tQGkaEwycAXQ&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwC69ODZ62TfF7RMU90URX9uqOV591-KsjvtoAlxjbExQhS-AJRdzIkbOQ&s=10', 'https://upload.wikimedia.org/wikipedia/en/d/d2/Doraemon_1981_film_poster.jpg', 'https://m.media-amazon.com/images/M/MV5BMjBiZThhZmQtNGYyOS00MDAyLThmMmYtNGFiNWJjNDkyY2RlXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDMlbyBKdQb9wQXOI25qGngqaN1Ht_DVeXw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztTJMCc2QqiWRs9VH8zED7LPC6ooxFyI5mg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDn2W29oT4_lqc4mdocODxz2gKkdH6k0AnZczNGQWp3hhFxdjAaXx9VE&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfAzidztwS9kU-hgjLF0FqVF_-2LTA9PUlhyZdCKhcDhMBuw7KCaNWz0&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_OMugkMY5x6UKIPVzpmR3lrLWlHoTtEa70yV7CShDlrwWLKORyP9WjEk&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSayqcjxEPbbA79ptWTMcOSKn3L4l6PEhRTJA&usqp=CAU', 'https://m.media-amazon.com/images/M/MV5BNjQ1YTZiMzQtNTljMS00MGYyLTgxYWYtMmY4MmQ2Njg1OTUwXkEyXkFqcGdeQXVyODk1NzM2MjE@._V1_FMjpg_UX1000_.jpg', 'https://m.media-amazon.com/images/M/MV5BMjQwNTk0MDEtN2YyMy00YTNhLWIyMDYtNTg0Yjc3MzIzZTgzXkEyXkFqcGdeQXVyODk1NzM2MjE@._V1_.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3z9DW-lbwc-YR0-l3AMKjkcVvFdTEqz53mM3-QUvSQIsxnH1kN6f4qbD7&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsSQ4HpjOQ2WkrB5B5ZQIc8gnqMZfINzKp0dw-hhyPFofeDJ0VLtAfHc&s=10', 'https://m.media-amazon.com/images/M/MV5BOWM3YzdlZjAtZmZhMC00MWQyLThhMmMtNzk1NjU4ODhiMjkxXkEyXkFqcGdeQXVyODk1NzM2MjE@._V1_FMjpg_UX1000_.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8Q5hJq6-Ke4OeqJSV5RirSSc2UFBs2Mk1Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYv0DpWlntf9LthsG7jezvhBxuRX7JCChwGe_cwMQRy3JxBteqomVqJc6o&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGKBvLMTYDbEH3kUPJtf6syQ-j6S-u0P6E58BU_gWlOR9mn_Ll1c4uOQ&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivEHOyhh0_mSR8Cfta4IMxIVWO9CAfzYifPdCfMmF03JIB4y0-uEeIl4&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNnWjmPBTcrewiyHS-mNqoQiQc-aruJXthveCrImBH5HcXlg-ByDaW0I&s=10', 'https://m.media-amazon.com/images/M/MV5BYzk4MGYzNTAtMTEyYS00MDU0LWI5ZGQtMGI3NTFmMmZkOGZjXkEyXkFqcGdeQXVyNjgwNTk4Mg@@._V1_.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkitKe-IZPYPe6J9NM_SbKKQNpr5QVYM48Ahh8u_akrbZp-tVldKgU3w&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMW8yn6LTGOXf1ogLkjsQVcUkgoWYvmA_KKxvpz7c23tBpjwee8uv_C7E&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogZpq5LJQ834q7fYgwQ3NEDkobP6jH5ud0A&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevuNh_irdcPEq-nkiWXRNVu8ta6u4x-7TmcM8Q42s2_2rkagskm166sjU&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFgwGftVZ8O1y2n7G1XYTUB8yDl7AXdlkrevgXI5Vl8oMsK5EeLADycB-&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHXdOI8Ma4xCYRYSMarZ1jrPqsmdcC7leMp-AMF9OBE5tFpFs8rfA6pXP&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXZgKqpYjrvGa8-HErmWleLrtTvY20PgXZoF7wJVlFpZiOudZyjD3YUtn&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9be_crAmnUMvSo9HCBcXvwy3sZQhguH76n1hsVaG9wD_evmi6qXcrsKfC&s=10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsXLW-9q8z5Hzvhxnup7yGG8ontMMEh0-SiPbvNFk6owcbWSrCNK61UU&s=10', 'https://upload.wikimedia.org/wikipedia/en/9/9f/Doraemon_movie_2018.jpeg', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Little_Star_Wars_2021.jpg/220px-Little_Star_Wars_2021.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUKrAWA3FHS9aIocj16jcVDGzFuBkUuJnOgl_jjj-mAPZ99P9sUfUPOVR&s=10', 'https://static.wikia.nocookie.net/doraemon/images/7/70/E87c5.jpg/revision/latest/top-crop/width/360/height/450?cb=20170314110140&path-prefix=en', 'https://upload.wikimedia.org/wikipedia/en/4/43/Nobita_and_the_Robot_Kingdom.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEpnkANyN53p40AK1MK1icSNpRFGHmxkKOWPBWeAIBFG-VHroDEZQLlY&s=10');
    // movie poster and 1
  
  
  
  
  
    // movie nem
    var nem = new Array('Stand by Me Doraemon', 'Stand by Me Doraemon 2', 'Nobita and the Kingdom of Clouds', " Nobita's new dinosaur", "Nobita's Dinosaur", "Nobita's Mermaid Legend", "Nobita and the Galaxy Super-express", 'Nobita and the Windmasters', 'Nobita to tsubasa no yûsha tachi', 'Nobita and the Island of Miracles', 'The Records of Nobita, Spaceblazer', 'What Am I for Momotaro', 'Nobita and the Haunts of Evil', 'Nobita and the Castle of the Undersea Devil', "Nobita 's Great Adventure into the Underworld", "Nobita 's Little Star Wars", 'Nobita and the Steel Troops', 'Nobita and the Knights on Dinosaurs', "The Record of Nobita 's Parallel Visit to the West", 'Nobita and the Birth of Japan', 'Nobita and the Animal Planet', "Nobita 's Dorabian Nights", 'Nobita and the Tin Labyrinth', 'Nobita to mugen sankenshi', " Nobita's Diary on the Creation of the World", '2112: The Birth of Doraemon', "Robot School's Seven Mysteries", 'Nobita and the Spiral City', "Nobita's Great Adventure in the South Seas", 'Nobita and the Legend of the Sun King', 'Doraemon the Hero', 'The Day When I Was Born', 'Nobita Drifts in the Universe', 'Nobita in the Wan - Nyan Spacetime Odyssey', 'Nobita and the Green Giant Legend', "Nobita's Secret Gadget Museum", "Nobita 's Space Heroes", 'Great Adventure in the Antarctic Kachi Kochi', 'Nobita no Takarajima', "Nobita's Little Star Wars 2021", "Nobita 's Chronicle of the Moon Exploration", 'Tokimeki Solar Kurumaniyon', 'Nobita in the Robot Kingdom', 'Doraemon Anniversary 25 ');
    // movie nem and 2
  
  
  
  
    // movie IMD 
    var imd = new Array('7.4', '7.7', '7.1', '7.4', '7.2', '6.6', '6.9', '7', '6.9', '7.4', '6.7', '6.9', '6.8', '7', '7', '7.1', '7.5', '6.8', '6.9', '6.8', '6.9', '7.1', '7', '7.2', '6.8', '9.1', '3.5', '6.5', '6.9', '7.1', '6.6', '9.1', '6.5', '7', '6.5', '6.9', '6.5', '6.5', '6.6', '7', '6.7', '2.3', '6.6', '6.2');
    // movie IMD  and 3
  
  
    // movie  rilis det
    var det = new Array('2014', '2020', '1992', '2020', '1980', '2010', '1996', '2003', '2001', '2012', '1981', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1993', '1994', '1995', '1995', '1996', '1997', '1998', '2000', '2009', '2002', '1999', '2004', '2008', '2013', '2015', '2017', '2018', '2022', '2019', '1992', '2002', '2004');
    // movie  rilis det and 4
  
  
    // movie  tayp
    var tayp = new Array('Sci-fi/Anime', 'Sci-fi/Drama', 'Animation', 'Sci-fi/Anime', 'Adventure/Sci-fi ', 'Adventure/Animation', 'Adventure/Sci-fi', 'Anime/Animation', 'Adventure / Anime', 'Adventure/Animation', 'Adventure/Anime', 'Adventurime', 'Adventure/Animation', 'Animation', 'Adventure/Family', 'Aamily', 'Sci-fi/Anime', 'Animation', 'Anime', 'Animation', 'Animation', 'Aamily', 'Animation', 'Anime', 'Family/Anime', 'Animation/Adventure', 'Short/Anime', 'Animation', 'Animation', 'Anime/Animation', 'Anime/Animation', 'Short/Animation', 'Animation', 'Anime/Animation', ' Anime/Fantasy', 'Sci-fi/Mystery ', 'Adventure/Family', 'Adventure/Sci-fi', 'Sci-fi/Adventure', 'Animation/Sci-fi', 'Sci-fi/Anime', 'Animation', 'Anime/Family', 'Animation');
    // movie  tayp and 5
  
  
    // movie  function
var fn = new Array("videos_car('B0')",
  "videos_car('B1')", "videos_car('B2')",
  "videos_car('B3')", "videos_car('B4')",
  "videos_car('B5')", "videos_car('B6')",
  "videos_car('B7')", "videos_car('B8')",
  "videos_car('B9')", "videos_car('B10')",
  "videos_car('B11')", "videos_car('B12')",
  "videos_car('B13')", "videos_car('B14')",
  "videos_car('B15')", "videos_car('B16')",
  "videos_car('B17')", "videos_car('B18')",
  "videos_car('B19')", "videos_car('B20')",
  "videos_car('B21')", "videos_car('B22')",
  "videos_car('B23')", "videos_car('B24')",
  "videos_car('B25')", "videos_car('B26')",
  "videos_car('B27')", "videos_car('B28')",
  "videos_car('B29')", "videos_car('B30')",
  "videos_car('B31')", "videos_car('B32')",
  "videos_car('B33')", "videos_car('B34')",
  "videos_car('B35')", "videos_car('B36')",
  "videos_car('B37')", "videos_car('B38')",
  "videos_car('B39')", "videos_car('B40')",
  "videos_car('B41')", "videos_car('B42')",
  "videos_car('B43')");
    // movie  function and 6
  
  
    for (var i = 0; i < 1; i++) {
  
  
  
      var box = document.getElementById('myUL');
  
      box.innerHTML += `
    <li class="muvi_car" onclick="${fn[o]}" >
    <img src="${img[o]}" alt="">
    <div class="muvi_car_text">
    <div><a href="#">${nem[o]}</a>
    <b><bu id="blue_">${imd[o]}</bu>/10</b></div>
    <div><i>${tayp[o]}</i><d>${det[o]}</d></div></div>
    </li>`;
  
  
    }
  
  }
  
  
  // 🔍 Searching
  
 
console.log('Hello World!');



function myFunction() {
  
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}







