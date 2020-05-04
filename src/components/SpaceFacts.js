import React from 'react'

export default class SpaceFacts extends React.Component {
    
    render() {

        let facts = [
            {
                title: "I'm Baby Unicorn Art Party",
                text: "I'm baby unicorn art party fixie put a bird on it, photo booth schlitz small batch green juice plaid man braid leggings hella swag kombucha. Yuccie sustainable beard keffiyeh four dollar toast tacos direct trade pabst lumbersexual tofu jianbing ennui narwhal. Readymade roof party YOLO, man braid next level hexagon leggings butcher tacos copper mug locavore. Listicle chillwave typewriter cronut. Tumblr ramps try-hard selfies hammock wolf fanny pack PBR&B, DIY normcore microdosing XOXO. Selvage franzen brooklyn, austin marfa dreamcatcher heirloom."
            },
            {
                title: "Asymmetrical Intelligentsia Mlkshk",
                text: "Asymmetrical intelligentsia mlkshk distillery, taxidermy glossier prism deep v chia YOLO. Drinking vinegar truffaut swag tilde portland leggings. Schlitz cold-pressed everyday carry, af authentic kombucha venmo wolf sriracha scenester crucifix iceland gastropub. Butcher portland ramps master cleanse venmo gochujang, kale chips hammock kogi post-ironic health goth. Fashion axe iPhone pug unicorn fam freegan truffaut. Edison bulb gentrify biodiesel leggings gastropub ennui. Synth locavore banjo, cloud bread bushwick drinking vinegar brunch disrupt post-ironic occupy tilde 90's."
            },
            {
                title: "Shaman Paleo Cornhole Health Goth",
                text: "Shaman paleo cornhole health goth, live-edge kickstarter post-ironic cred bicycle rights thundercats trust fund copper mug truffaut vegan. Franzen neutra polaroid taxidermy. Copper mug iceland meggings bushwick street art banjo succulents tattooed squid pinterest jean shorts pour-over cliche knausgaard unicorn. Gastropub viral austin pabst you probably haven't heard of them church-key aesthetic chillwave, squid kickstarter franzen master cleanse selfies pok pok hoodie. VHS art party thundercats, hoodie put a bird on it chicharrones forage."
            },
            {
                title: "Wayfarers Mustache Yuccie Bespoke",
                text: "Wayfarers mustache yuccie bespoke. Kale chips poke umami iceland farm-to-table godard letterpress leggings. Plaid enamel pin tofu tbh. Kitsch cloud bread viral salvia, pop-up affogato twee. Lumbersexual heirloom pitchfork drinking vinegar vape. Tacos seitan jianbing microdosing squid gochujang."
            },
            {
                title: "Copper Mug DIY Portland",
                text: "Copper mug DIY portland, kogi four loko biodiesel meggings. Succulents meditation green juice vinyl scenester freegan shabby chic pop-up. Small batch activated charcoal listicle selvage letterpress prism cred migas organic fingerstache mumblecore. Mlkshk bicycle rights squid copper mug, iceland freegan flexitarian readymade franzen authentic. Wolf vice edison bulb, air plant marfa shoreditch leggings hammock."
            }
        ]

        const factlist = facts.map(function(fact, index){
            return (
                <div key={index} className="fact">
                    <h2>{fact.title}</h2>
                    <p>{fact.text}</p>
                </div>)
          })

        return  (
            <div className="space-facts-container">
                <div className="top-left boxed">
                        Space Facts
                </div>
                <div className="spacer"></div>
                <div className="inner-container">
                    {factlist}
                </div>
            </div>)
    }
}
