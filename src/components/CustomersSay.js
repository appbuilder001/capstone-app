import ReviewCard from './ReviewCard'
import image1 from '../assets/avatars/avatar1.png'
import image2 from '../assets/avatars/avatar2.png'
import image3 from '../assets/avatars/avatar3.png'
import image4 from '../assets/avatars/avatar4.png'

function CustomersSay() {
    const reviews = [
        {
            name: 'user1',
            rating: 5,
            description: 'The food is great!',
            image: image1,
        },
        {
            name: 'user2',
            rating: 5,
            description: 'Will be coming back!',
            image: image2,
        },
        {
            name: 'Greek Salad',
            rating: 4,
            description: 'Can not wait to return!',
            image: image3,
        },
        {
            name: 'Greek Salad',
            rating: 5,
            description: 'Next time I will try the bruchetta.',
            image: image4,
        },
    ]

    const reviewElement =  reviews.map(({name, rating, description, image}) => {
        return (
            <ReviewCard name={name} rating={rating} description={description} image={image} />
        )
    })

    console.log(reviewElement)
 

    return(
    <div style={{background: 'var(--primary_color2)', padding: '75px 0'}}>
        <section className='flex-row just-c m-a'style={{width: '70%'}}>
            <h3 className='texta-c' style={{fontFamily: 'var(--typeface1'}}>Testimonials!</h3>
        </section>
        <section className='flex-row just-se ai-c m-a wrap gap' style={{marginTop: '50px', width: '70%'}}>
            {reviewElement.map(review => {return <>{review}</>})}
        </section>
    </div>) 
}

export default CustomersSay