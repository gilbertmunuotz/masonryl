/* eslint-disable jsx-a11y/anchor-is-valid */
import pic1 from "./Images/african-american-business-woman.jpg";
import pic2 from './Images/handsome-young-businessman-suit.jpg'
import pic3 from './Images/cheerful-african-businesswoman-full-body-portrait-jobs-career-campaign.jpg'
import pic4 from './Images/medium-shot-male-flight-attendant-posing.jpg'

function App() {
  return (
    <div className="App mx-0 font-poppins bg-gray-400">
      <header>
        <nav className="grid grid-cols-5 m-0 text-center items-center">
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <h1 className="font-bold uppercase tracking-wider">
            <div>Express</div>
            <div>Yourself</div>
          </h1>
          <a href="/">Guides</a>
          <a href="/">Contact</a>
        </nav>
      </header>
      <main className="grid grid-cols-3 p-5 auto-rows-2fr gap-7">

        <div className="short overflow-hidden">
          <h3>A note about style</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
          <a href="">Read more</a>
        </div>

        <div className="tall overflow-hidden row-span-2">
          <img src={pic1} alt="model" srcset="" className="min-w-full h-full" />
        </div>

        <div className="short overflow-hidden">
          <h3>A note about style</h3>
          <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
          <a href="">Read more</a>
        </div>

        <div className="tall overflow-hidden">
          <img src={pic2} alt="model" srcset="" className="min-w-full h-full"  />
        </div>

        <div className="tall overflow-hidden">
          <img src={pic3} alt="model" srcset="" className="min-w-full h-full" />
        </div>

        <div className="tall overflow-hidden">
          <h3>A note about style</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas perspiciatis natus sit dicta repellendus quia mollitia. Voluptas ullam ipsa dolorem.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse accusamus possimus asperiores fugiat at nostrum odio repellendus voluptates. Iusto asperiores voluptate similique maiores ut omnis dolores corporis, tenetur excepturi quis?</p>
          <a href="">Read more</a>
        </div>

        <div className="short overflow-hidden">
          <h3>A note about style</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
          <a href="">Read more</a>
        </div>

        <div className="tall overflow-hidden row">
          <img src={pic4} alt="model" srcset="" className="min-w-full h-full" />
        </div>

        <div className="short overflow-hidden">
          <h3>A note about style</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
          <a href="">Read more</a>
        </div>

        <div className="short overflow-hidden">
          <h3>A note about style</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
          <a href="">Read more</a>
        </div>
      </main>
    </div>
  );
}

export default App;
