import SpecialsCard from './SpecialsCard'
import image1 from '../assets/images/lemondessert.jpg'
import image2 from '../assets/images/bruchetta.svg'
import image3 from '../assets/images/greeksalad.jpg'


function Specials() {

    const specials = [
        {
            image: image3,
            name: 'Greek Salad',
            price: '12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        },
        {
            image: image2,
            name: 'Bruchetta',
            price: '5.99',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        },
        {
            image: image1,
            name: 'Lemon Dessert',
            price: '5.00',
            description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        },
    ]

    const specialElement =  specials.map(({image, name, price, description}) => {
        return (
            <SpecialsCard image={image} name={name} price={price} description={description} />
        )
    })

    console.log(specialElement)
 

    return(
    <div style={{marginTop: '-75px', background: 'white'}}>
        <section className='flex-row just-sb ai-fe m-a' style={{paddingTop: '100px', width: '70%'}}>
            <h2 style={{lineHeight: '.7', fontFamily: 'var(--typeface1'}}>This weeks specials!</h2>
            <button className='cta_btn' style={{width: '200px', height: '60px'}}>Onine Menu</button>
        </section>
        <section className='flex-row just-se ai-c m-a wrap gap' style={{width: '70%', paddingBottom: '75px', marginTop: '70px'}}>
            {specialElement.map(special => {return <>{special}</>})}
        </section>
    </div>) 
}

export default Specials