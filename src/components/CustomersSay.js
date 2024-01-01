function CustomersSay() {
    const reviews = [
        {
            name: 'user1',
            rating: '12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        },
        {
            name: 'user2',
            rating: 'user3',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        },
        {
            name: 'Greek Salad',
            rating: '12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        },
    ]

    const specialElement =  specials.map(({name, rating, description}) => {
        return (
            <ReviewCard name={name} rating={rating} description={description} />
        )
    })

    console.log(specialElement)
 

    return(
    <div style={{marginTop: '-75px', background: 'white'}}>
        <section className='flex-row just-sb ai-fe m-a' style={{paddingTop: '100px', width: '70%'}}>
            <h2 style={{lineHeight: '.7', fontFamily: 'var(--typeface1'}}>This weeks specials!</h2>
            <button className='cta_btn' style={{width: '200px', height: '60px'}}>Onine Menu</button>
        </section>
        <section className='flex-row just-sb ai-c m-a wrap gap' style={{width: '70%', marginTop: '70px'}}>
            {specialElement.map(special => {return <>{special}</>})}
        </section>
    </div>) 
}

export default CustomersSay