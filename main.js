
//set class for first section
const featuredSection = document.querySelector('section');
featuredSection.classList.add('featured');

//create new article
const article = document.createElement("article");

    //image
    const img = document.createElement("img");
    img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
    img.setAttribute("alt", "Image of a mountain in front of a lake.");

    //header
    const h3 = document.createElement("h3");
    h3.textContent = "Stop Planning";

    //paragraph
    const p1 = document.createElement("p");
    p1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

//append elements to article    
article.append(img);
article.append(h3);
article.append(p1);

/**
<aside>
<p>
  <span>
        <strong>Read Time:</strong> 4 Minutes
  </span>
  <a href="#">Read more...</a>
</p>
</aside>
 */

//create the aside
const aside = document.createElement('aside');

    //create span
    const strong = document.createElement('strong');
        strong.textContent = 'Read Time:';

        const span = document.createElement('span');
        span.textContent = '4 Minutes';
        span.prepend(strong);
    
    //crate anchor
    const a = document.createElement('a');
        a.setAttribute("href", "#")
        a.textContent = "Read more..."

    //create p
    const p2 = document.createElement("p");
        p2.append(span);
        p2.append(a);


    //append elements to aside
    aside.append(p2);

//append aside to article    
article.append(aside);


//add new article to posts section
const postsSection = document.querySelector('.posts');
postsSection.append(article);

//reorder articles
const articles = document.querySelectorAll("article");
const article2 = articles[2];
articles[2].remove();
postsSection.prepend(article2);

