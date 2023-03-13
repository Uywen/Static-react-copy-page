// added styles from react bootstrap
import React from "react";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Info(){
    return(
        // placed the information in colums so they could be divided with trending posts
        // added different styles to each heading and paragraph
        // the information side is 8 columns long
        // got information from original site
        <Container>
            <Row>
                <Col md={8}>
            <h1 className="edit-me">Zoro.to - The best site to watch anime online for Free</h1>
            <p className="edit">Do you know that according to Google, the monthly search volume for anime related topics is up to over 1 Billion times? Anime is famous worldwide and it is no wonder we've seen a sharp rise in the number of free anime streaming sites.</p>
            <p className="edit">Just like free online movie streaming sites, anime watching sites are not created equally, some are better than the rest, so we've decided to build Zoro.to to be one of the best free anime streaming site for all anime fans on the world.</p>
            <h1 className="edit-me">1/ What is Zoro.to?</h1>
            <p className="edit">Zoro.to is a free site to watch anime and you can even download subbed or dubbed anime in ultra HD quality without any registration or payment. By having No Ads in all kinds, we are trying to make it the safest site for free anime.</p>
            <h1 className="edit-me">2/ Is Zoro.to safe?</h1>
            <p className="edit">Yes we are, we do have only one Ads to cover the server cost and we keep scanning the ads 24/7 to make sure all are clean, If you find any ads that is suspicious, please forward us the info and we will remove it.</p>
            <h1 className="edit-me">3/ So what make Zoro.to the best site to watch anime free online?</h1>
            <p className="edit">Before building Zoro.to, we've checked many other free anime sites, and learnt from them. We only keep the good things and remove all the bad things from all the competitors, to put it in our Zoro website. Let's see how we're so confident about being the best site for anime streaming:</p>
            <ul>
                <li className="edit2">Safety: We try our best to not having harmful ads on Zoro.</li>
                <li className="edit2">Content library: Our main focus is anime. You can find here popular, classic, as well as current titles from all genres such as action, drama, kids, fantasy, horror, mystery, police, romance, school, comedy, music, game and many more. All these titles come with English subtitles or are dubbed in many languages.</li>
                <li className="edit2">Quality/Resolution: All titles are in excellent resolution, the best quality possible. Zoro.to also has a quality setting function to make sure our users can enjoy streaming no matter how fast your Internet speed is. You can stream the anime at 360p if your Internet is being ridiculous, Or if it is good, you can go with 720p or even 1080p anime.</li>
                <li className="edit2">Streaming experience: Compared to other anime streaming sites, the loading speed at Zoro.to is faster. Downloading is just as easy as streaming, you won't have any problem saving the videos to watch offline later.</li>
                <li className="edit2">Updates: We updates new titles as well as fulfill the requests on a daily basis so be warned, you will never run out of what to watch on Zoro.</li>
                <li className="edit2">User interface: Our UI and UX makes it easy for anyone, no matter how old you are, how long have you been on the Internet. Literally, you can figure out how to navigate our site after a quick look. If you want to watch a specific title, search for it via the search box. If you want to look for suggestions, you can use the site's categories or simply scroll down for new releases.</li>
                <li className="edit2">Device compatibility: Zoro works alright on both your mobile and desktop. However, we'd recommend you use your desktop for a smoother streaming experience.</li>
                <li className="edit2">Customer care: We are in active mode 24/7. You can always contact us for any help, query, or business-related inquiry. On our previous projects, we were known for our great customer service as we were quick to fix broken links or upload requested content.</li>
                <p className="edit2">So if you're looking for a trustworthy and safe site for your Anime streaming, let's give Zoro.to a try. And if you like us, please help us to spread the words and do not forget to bookmark our site.</p>
                <p className="edit">Thank you!</p>
            </ul>
            </Col>
            {/* trending posts is four columns long */}
            {/* added different styles to each category that has a # */}
            <Col md={4}>
                <h1 className="Posts">Trending Posts</h1>
                <div className="Trending">
                <p className="quest">#Question</p>
                <p className="Username"><b>Dog or Cat?</b></p>
                <p className="gen">You can only choose one</p>
                </div>
                <div className="Trending1">
                    <p className="quest">#Question</p>
                    <p className="Username"><b>Best Naruto fight?</b></p>
                    <p className="gen">go on.make it happen</p>
                </div>
                <div className="Trending1">
                <p className="sugg">#Suggestion</p>
                <p className="Username"><b>Any cool Romance Anime</b></p>
                <p className="gen">Went through a bad breakup</p>
                </div>
                <div className="Trending1">
                    <p className="gen">#general</p>
                    <p className="Username"><b>Rate my Watchlist</b></p>
                    <p className="gen">...bored</p>
                </div>
                <div className="Trending1">
                    <p className="Disc">#Discussion</p>
                    <p className="Username"><b>Who do you think is Stronger goku or saitama?</b></p>
                    <p className="gen">Let the argument begin</p>
                </div>
                <div className="Trending1">
                    <p className="quest">#Question</p>
                    <p className="Username"><b>When is the new AOT releasing?</b></p>
                    <p className="gen">Cant seem to find any dates on internet?</p>
                </div>
                <div className="Trending1">
                    <p className="Disc">#Discussion</p>
                    <p className="Username"><b>Top 3 Animes?</b></p>
                    <p className="gen">Checking peoples opinions</p>
                </div>
                <div className="Trending1">
                    <p className="gen">#general</p>
                    <p className="Username"><b>Anybody want me to add them on ig</b></p>
                    <p className="gen">My ig:Mystery_anime man</p>
                </div>
                <div className="Trending1">
                    <p className="Disc">#Discussion</p>
                    <p className="Username"><b>When is luffy going to find the One Piece?</b></p>
                    <p className="gen">im on episode 900 already</p>
                </div>
                <div className="Trending1">
                    <p className="gen">#General</p>
                    <p className="Username"><b>Rate my Anime playlist</b></p>
                    <p className="gen">..Honest opinion only</p>
                </div>
                <div className="Trending1">
                    <p className="sugg">#Suggestion</p>
                    <p className="Username"><b>Something similar to "Spirited Away"</b></p>
                    <p className="gen">just fell inlove with the movie need something with the same feel</p>
                </div>
                <div className="Trending1">
                    <p className="sugg">#Suggestion</p>
                    <p className="Username"><b>Mcds or Burger King</b></p>
                    <p className="gen">Contemplating what to eat</p>
                </div>
                {/* added a button showing read more */}
                <button className="Read-more">Read more</button>
            </Col>
            </Row>
            {/* the link to original site */}
            <a href='https://zoro.to/'>Link to Original Site</a>
        </Container>
    )
}

export default Info