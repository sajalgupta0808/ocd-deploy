import React from "react";
import kumar from '../assets/componets-bg/kumar.jpg'
import bajaj from '../assets/componets-bg/bajaj.jpg'
import narula from '../assets/componets-bg/narula.png'
import mathew from '../assets/componets-bg/mathew.jpg'

const MoreCustomersSay = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>MORE CUSTOMERS SAY</h2>
      <div style={styles.cardsContainer}>
        
        {/* Card 1 */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <img
              src={kumar}
              alt="Satyendra Kumar"
              style={styles.image}
            />
            <div>
              <h3 style={styles.name}>Satyendra Kumar</h3>
              <div style={styles.stars}>★★★★★</div>
            </div>
          </div>
          <p style={styles.text}>
            I got to know about OCD through Ducati owners group, I spoke to
            Saurabh before office timings and I was pleasantly surprised as he
            was available to talk and explained everything.
            He went over and above and told me to visit him in person to show me
            a car which he had worked on.
            <br />
            I had a bitter experience of ceramic coating with one of the
            detailers in the city who did it on my black Creta 2020. So I was
            kind of on edge about whether I should go for it or not. But then I
            decided to at least hear what he had in store for me.
            <br />
            I am glad I made the trip to his workshop as I haven’t seen any
            other person with this in depth knowledge about paint, ceramic
            coatings and general external upkeep of car.
            <br />
            Whatever I read aligned with what Saurabh had said. And man, when I
            picked the car after 3 days, I was mighty impressed.
            <br />
            Kudos Saurabh, Keep up the good work.
            <br />
            PS: I got my Kodiaq Sportline straight from the showroom to him in
            two days time. The earlier <br />you get your car, the better it is I
            believe.
          </p>
        </div>

        {/* Card 2 */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <img
              src={bajaj}
              alt="Akul Bajaj"
              style={styles.image}
            />
            <div>
              <h3 style={styles.name}>Akul Bajaj</h3>
              <div style={styles.stars}>★★★★★</div>
            </div>
          </div>
          <p style={styles.text}>
            I had contacted Saurabh in May 2022 after getting a Versys 1000 for
            its detailing.
            <br />
            He patiently explained to me the process and options available post
            which I chose the best possible (graphene) coating for my bike.
            <br />
            He's very meticulous and is a complete hands-on guy. The best part
            of his detailing is that he treats the vehicle as his own and gives
            it similar level of pampering and treatment.
            <br />
            The guys make sure to reach every possible nook and corner of the bike while cleaning and coating the bike. You'll be amazed to see the final results in person.
            <br />
            6 months down the line, I got the maintenance coating done today and
            the day spent was like therapy.You'll enjoy every moment in the studio. And the most important thing was that after 6 months, I can say with confidence that the coating has done its job. The bike doesn't get dirty easily and even if it does, it's super easy to clean with a simple swipe with microfiber cloth.
Kudos to the amazing service!
            <br />
            And as I mentioned to him in person, it's always a pleasure to drop by his studio and get some work done.
            <br />
            10/10 would recommend everyone to get their detailing work done from
            Saurabh.
          </p>
        </div>

        {/* Card 3 */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <img
              src={narula}
              alt="Sarthak Narula"
              style={styles.image}
            />
            <div>
              <h3 style={styles.name}>Sarthak Narula</h3>
              <div style={styles.stars}>★★★★★</div>
            </div>
          </div>
          <p style={styles.text}>
            I recently got Nano Graphene coating done on my Triumph Scrambler 400X from OCD details studio and the entire experience from dropping off the bike to collecting it was just phenomenal!<br />
Upon arrival I was precisely explained about the process which will be happening on the bike and an accurate timeline was given to me.<br />
At the time of delivery, I was just completely flabbergasted after seeing the bike, it looked better than the day I took delivery from the showroom. I was informed how to take care of the bike post detailing and when to visit again for the service checks.< br/>
It's their genuine love towards the process which makes them standout, they genuinely care and are emotionally invested towards their craft. The team's passion and dedication is unmatched.<br />
A big thank you to Mr. Saurabh and the entire team for their outstanding service. I just absolutely loved the service and would highly recommend OCD Detail Studio to anyone looking for detailing services, <br />I can surely vouch that you will not be disappointed.

          </p>
        </div>

        {/* Card 4 */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <img
              src={mathew}
              alt="Mathew Vadakkel"
              style={styles.image}
            />
            <div>
              <h3 style={styles.name}>Mathew Vadakkel</h3>
              <div style={styles.stars}>★★★★★</div>
            </div>
          </div>
          <p style={styles.text}>
            Great attention to detail, quite literally! 
            I had my new car's paint detailed and protected with a ceramic coat almost 1.5 years ago and followed the coating checkup/maintenance visits recommended every 6 months since. 
            The car looked better than how it left the showroom and still has the same lustre and gloss even today despite, dust, heat, grime, monsoons in Gurgaon, frequent highway runs for work and holiday trips to the hills.
             Saurabh, the owner of the shop works on the vehicles himself along with his crew and this makes a great difference to quality of workmanship. Work is completed punctually and I've never had to wait longer than estimated when I've handed over the vehicle.</p>
        </div>
      </div>
    </div>
  );
};

// CSS in JS
const styles = {
  container: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "5px 2px",
    fontFamily: "'Arial', sans-serif",
  },
  
  heading: {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: "80px",         
  fontWeight: 400,
  marginBottom: "30px",
  marginTop: "30px",
  paddingLeft: "13%",   
  lineHeight: "1.6",       // Increase vertical space inside the text
},


  // ---------- UPDATED ----------
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "minmax(0,600px) minmax(0,600px)", // fixed card widths
    columnGap: "20px",            // <-- reduce space BETWEEN the two cards (make smaller to tighten)
    justifyContent: "center",     // center the pair in the page
    padding: "0 16px",            // reduce left/right outer padding so cards come closer to page edges
    alignItems: "stretch",
    rowGap: "40px", 
  },

  card: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "2px",
    padding: "20px",
    width: "600px",               // match the grid column size
    margin: 0,                    // remove auto centering inside the grid cell
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      display: "flex",           // ✅ Ensure the card fills available vertical space
    flexDirection: "column",
    height: "100%",
  },
  // ---------- END UPDATED ----------

  cardHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "4px",
    marginRight: "15px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: 0,
  },
  stars: {
    color: "#f5c518",
    fontSize: "18px",
  },
  text: {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "16px",
  lineHeight: "23.8px",
  textAlign: "justify",
  letterSpacing: "0px", // optional, default is already 0
  color: "#737373", 
},

};


export default MoreCustomersSay;
