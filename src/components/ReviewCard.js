function ReviewCard(props) {

    const stars = []

    for (let i = 0; i < props.rating; i++)
        stars.push(<p style={{color: 'gold'}}>&#9733;</p>)
    for (let i = 0; i < (5 - props.rating); i++)
        stars.push(<p style={{color: 'grey'}}>&#9733;</p>)

    return (
        <div className='radius' style={{backgroundColor: 'var(--highlight_color1)', height: '180px', width: '200px'}}>
            <div className='flex-col gap' style={{padding: '20px'}}>
                <div class='flex-row'>
                   {stars}
                </div>
                <div class='flex-row ai-c gap'>
                    <img src={props.image} style={{width: '40px'}}></img>
                    <p style={{fontSize: '16px'}}>{props.name}</p>
                </div>
                <div class='flex-row'>
                    <p style={{fontSize: '14px'}}>{props.description}</p>
                </div>
            </div>
        </div>
)} 

export default ReviewCard