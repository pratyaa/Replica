import LandingMiddle from './Landingpage-middle'
import {IntroComponent,RationalComponent,PuzzleComponent} from './TopicsAndDescription'

const FirstPage = () => {
    return (
        <div>
             <LandingMiddle/>
            <IntroComponent/>
            <RationalComponent/>
            <PuzzleComponent/>
        </div>
    )
}

export default FirstPage
