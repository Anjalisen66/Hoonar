import React from 'react'
import "../index.css"
import Navbar from './Navbar'
import image from '../image 71.svg'
import Footer from './Footer';
import { CiCircleChevDown } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { PiQuotesFill } from "react-icons/pi";
import { MdOutlineTravelExplore } from "react-icons/md";

function HomePage() {
  return (
    <>
      <div>
        <div className="bg-gradient-to-b  from-red-500 to-red-400 h-screen">
          <Navbar />
           {/* section-1 */}
          <div className='flex justify-center py-5'>
            <img src="https://s3-alpha-sig.figma.com/img/530d/edae/3cf2dc334c4f1c0e8054421aca5a47b6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fqojeNbeHGCkY-OkArm2PliMfi65yh~MWQ9T8WpdTmyxsnT7TOM2B1WSWZJdROTvSUDwU49VmYJJUGmofeXW65ei84sK-mxuwSISlq5dbZfF5LRARFhvJXKMFqQ4EwhmRyJAR~bfdcgOGVIcPMo-wqH4zbS4wTxOOqTUTPKT9YyqzfbKmnc3ZlMr3tl9MMQtzGDVF6Rvq758odrA1zyv8v0pI5m9g~TTgo9v7QWyjP5uXfL3NpCttd9IZ8UKbvqdU1trnbQeFzwzLd6-wZfcC9qFNEqqZNST5jDAB4PBuNovlDGVpGkHQZQpkOU88xDY5rwcdkv7~hP0dUuoq-2LIA__" alt="img" className='h-96 w-9/12 mr-4 rounded-3xl object-cover' />
          </div>

          <div className='text-white text-6xl font-sans font-bold justify-items-center px-24 text-center'>
            Feuling Dreams,Connecting Communities: Hoonar-Your Digital Junction!
          </div>

          <div className='flex justify-center'>
            <button className="bg-violet-400 text-neutral-50 opacity-50 w-2/6 h-14 rounded-full justify-items-center py-3 text-2xl my-4 truncate shrink">
              Register Your Start-Up Now!
            </button>
          </div>
        </div>

        <div className='bg-gradient-to-b from-red-400 to-pink-500 h-screen h-96 flex px-28 py-16 gap-16'>
          <div className='h-9 w-24 border bg-violet-900 rounded-full shadow-2xl shadow-violet-600 text-white flex justify-center items-center'><MdOutlineTravelExplore /></div>

          <div className='text-white'>
            <div className='font-sans text-6xl font-bold pb-8'>Explore Diverse Talent Near You!</div>
            <div className='font-sans text-xl pb-5 text-wrap'>Find what you need, when you need it. From tutoring to tailoring, discover a range of local services right in your neighborhood. Whether you're a customer seeking quality or a provider ready to showcase your skills, Hoonar has you covered. Join our community today!</div>
            <button className='bg-transparent border-2 border-grey-200 rounded-full h-10 w-64 font-mono font-bold  '>Start Exploring!</button>
          </div>
          <div className='bg-red-600 h-96 w-96 justify-center py-4 px-2 rounded-lg shadow-2xl shadow-violet-700 drop-shadow-2xl origin-bottom rotate-12  '>
            <div className=' h-80 w-60 '>
              <img src={image} alt="image" className='object-scale-down'/>
            </div>
          </div>

        </div>
          
        <div className=' bg-pink-500  text-white text-xs text-center'>
          <div className='text-sm'>Scroll to learn more</div>
          <button className='justify-center text-xl'><CiCircleChevDown /></button>
        </div>
      </div>

        {/* section-2 */}
      <div className='h-2/4 bg-gradient-to-b from-pink-500 to-red-900'>
        <div className='text-white text-5xl font-bold text-center py-5 '>Service Categories</div>
        <div className='flex px-60 text-3xl font-bold gap-x-72 text-white'>
          <div>
            <div className='flex py-5 gap-5'>
              <div className='text-xl py-2 '><CiCircleCheck /></div>
              <div>Tutoring Services</div>
            </div>
            <div className='flex py-5 gap-5'>
              <div className='text-xl py-2'><CiCircleCheck /></div>
              <div>Beauty & Wellness</div>
            </div>
            <div className='flex py-5 gap-5'>
              <div className='text-xl py-2'><CiCircleCheck /></div>
              <div>Technology Solutions</div>
            </div>
            <div className='flex py-5 gap-5'>
              <div className='text-xl py-2'><CiCircleCheck /></div>
              <div>Event Planning & Coordination</div>
            </div>
          </div>

          <div>
            <div className='flex py-5 gap-5'>
              <div className='text-xl py-2'><CiCircleCheck /></div>
              <div>Food stalls & Catering</div>
            </div>
            <div className='flex py-5 gap-5'>
              <div className='text-xl py-2'><CiCircleCheck /></div>
              <div>Art & Craft Workshops</div>
            </div>
            <div className='flex py-5 gap-5'>
              <div className='text-xl py-2'><CiCircleCheck /></div>
              <div>Personalized Gifts & Stationary</div>
            </div>
            <div className='flex py-5 gap-5'>
              <div className='text-xl py-2'><CiCircleCheck /></div>
              <div>Home Services</div>
            </div>
            <div className='flex py-5 gap-5'>
              <div className='text-xl py-2'><CiCircleCheck /></div>
              <div>And Many More</div>
            </div>
          </div>
        </div>
      </div>

      {/* section-3 */}
      <div className='h-max bg-gradient-to-b from-red-900  to-red-400 '>
        <div className='text-white text-4xl font-bold text-center pt-10'>Discover The Hoonar Difference!</div>
        <div className='flex justify-center gap-32'>
          <div className='my-24 '>
            <div className='flex gap-2 mb-16'>
              <div className='h-10 w-10 text-lg text-center content-center border border-white rounded-full bg-amber-700 shadow-xl shadow-violet-300'>2</div>
              <div>
                <div className='text-white text-2xl font-bold'>Personalized Recommendations</div>
                <div className="text-slate-300 text-sm">Tailors suggestions based on user preferences and location.</div>
                <img className='h-52 w-64 rounded-xl shadow-2xl shadow-white my-2' src="https://s3-alpha-sig.figma.com/img/8fa9/94f6/ef86b13428c1e018095c97880e89ccdd?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RiEBks7c31nH0fG2dDHIeopyPtK9Za1IfQ8d3DCFx~2j4~FEpYVar4WpsZPmDCq75yHz-1BJJr3Q7DwldTnXfgph1UklXFeeJ6vZIdxQfRiccWrpL-vhF9QyH1XRbYrZWK~WPrVzUVICdQqrXa~TQPzVLzhMnb5MpGvtnvBwI0frvcT-J0zrQjlZRQ7qEjUufTKPuin2E6SrMJXl9u1-pAu3~FkzCG9A1J39-Xcm-OVWHx-oNSdTIHIXuPpxcAO8930pzb0KCchXiEci3zKscu2W3HbOgwN0nXfVGMgCdeoIOjh1NfDQd-mHzUJ1iTgo6nBcJUxMW3ZvpLwEtL195A__" alt="" />

              </div>
            </div>
            <div className='flex gap-2 mb-16'>
              <div className='h-10 w-10 text-lg text-center content-center border border-white rounded-full bg-amber-700 shadow-xl shadow-violet-300'>4</div>
              <div>
                <div className='text-white text-2xl font-bold'>Easy Business Registration</div>
                <div className="text-slate-300 text-sm">Simplifies onboarding for businesses to expand their reach.</div>
                <img className='h-52 w-64 rounded-xl shadow-2xl shadow-white my-2' src="https://s3-alpha-sig.figma.com/img/c614/b4b2/d737e1156b5b22a6b76e4001d57dde2c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X-768Mm56IdmnMqjGfAc0j14G3bSKrz8C222E~B7XdDKCKqOLPf9r2~R4Mzdpd-sofYZ8SaBeFyvP99nkO4uEuteDKLkSTTynzQBPbsFWNZzbPrGorSjEghYvGHGOxLtqY69bLR0W2RuhapIygRyf1y7tsFqw35dxnxgwuwLYVYeQmVN40XPvE3Rt4ZwF3qxAFq9lkOXmaJnildUI96EQ3cuJx3Sb~DjQhXObAVuYH6P13z3oMl9cF5eBmBb7v3r5fEML1UiYZelNTFpl3yYFVA46cWHoZl~Pkb9LmkN~Y0ia5XOyZz0WsdXA09ZRDeBWMYuoEABt7au-UMw0Nxo0g__" alt="" />

              </div>
            </div>
            <div className='flex gap-2  mb-16'>
              <div className='h-10 w-10 text-lg text-center content-center border border-white rounded-full bg-amber-700 shadow-xl shadow-violet-300'>6</div>
              <div>
                <div className='text-white text-2xl font-bold'>Community Engagement</div>
                <div className="text-slate-300 text-sm">Facilitates interaction and involvement through forums and events.</div>
                <img className='h-52 w-64 rounded-xl shadow-2xl shadow-white my-2' src="https://s3-alpha-sig.figma.com/img/ca96/63dc/fefd192c5ed435eb0b20ae5f4d0f9208?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OhjMIvzQPiEjaqPpybDEAhzmamxXkKlzjMYmDi0bYAhWo0BZR~9Hvc~f-ItezfEv46S0O9Uoze39BNrqj0R8TlsjBUNDPfSQOnRoTSlsA--G8hOwkq0vwRwQIiiLTgbJlQS0pmPb1XD7tSWrEH71vnQ-k~M0ftimw4ghyxcYvjp-jsxiUU2BxOqR6b8OTvcr69h7FLqNH26-ML1j8A5iD-nJ5YA126XqV~N6fkCXf0QGbWRCHVBTzCGit0KIl9bxfEzRoIddvU90oQMaMOAX8pKVs6eADxEvd~gfdreVeugIUSmk5AimKAxBrN2QQAYFvb396RbPVr9afdWqfxo7tQ__" alt="" />

              </div>
            </div>
          </div>

          <div className='my-10'>
            <div className='flex gap-2 mb-16'>
              <div className='h-10 w-10 text-lg text-center content-center border border-white rounded-full bg-amber-700 shadow-xl shadow-violet-300'>1</div>
              <div>
                <div className='text-white text-2xl font-bold'>Local Focus</div>
                <div className="text-slate-300 text-sm">Connects users with nearby businesses, fostering community support.</div>
                <img className='h-52 w-64 rounded-xl shadow-2xl shadow-white my-2' src="https://s3-alpha-sig.figma.com/img/dafb/9c26/39c8a2f7b5a20119ab9b7f9507842cc9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N7XTfJr2AWTUvf61vB24jHKb-dBSqwm4G7BjdYrw9zuCRRo~FzYZVrZO7yU2RNKuaiinz~iXxh0IJ88LKM-IgYLjncExodgRrLuoGn4P-lkoBwNSCQPQ~VPC060S9o5xvpUcLi0W1wtcyelArb~ceetD6SH3Budw~xsp6ca-NSdEi13WxylEofr2FunxB2FCOwtttV6x3YZFfpxO0yDYB4M7QXVJlL7~MrYYQL-pwuShPUIh7-9CU2E6UXLgPYixoTMdEsuQ5ynbh8WaycsMbHgDt-56J3bDDqSCODS~udrdXqhUG1OcuxiBOzxwC-9sO7XpL5F9gajPe8xYQ0TkFw__" alt="" />

              </div>
            </div>
            <div className='flex gap-2 mb-16'>
              <div className='h-10 w-10 text-lg text-center content-center border border-white rounded-full bg-amber-700 shadow-xl shadow-violet-300'>3</div>
              <div>
                <div className='text-white text-2xl font-bold'>Verified Reviews</div>
                <div className="text-slate-300 text-sm">Ensures reliability through authenticated reviews and ratings.</div>
                <img className='h-52 w-64 rounded-xl shadow-2xl shadow-white my-2' src="https://s3-alpha-sig.figma.com/img/6c57/154a/3b76de65706d0350cefebceed0ec5303?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V5jDligmLB7wK03IvnXee85xvMbbBcwdDsbKqAPxWWRV5rIAV7UN7JWCw9KTGd51052oqc6CEt3ta2PsVuqsRR9KSqWPGpoywif9oggqAMX4WOsLzW6BX9zL234TrO-kiOdj9k8bRc6b6PLAhEvAKQyVpdB-p1hg0A0SbVYyezsYyMz8hDIQlvcNfK4EcF7o8XUFpMVXf0dkOvgGmF10UA~qzLFE9SlprMLrxTiJaV6OzxlMlOg57-IJMLvrwuqxgaUuu9gFHMzCyxdQKM9aMfi8KnlamcKVEVXLlNdXTH66JZeTsBbBF8ALJAgWkNf1SzCLoaAxAb0iykYAp5Ikyw__" alt="" />

              </div>
            </div>
            <div className='flex gap-2 mb-16'>
              <div className='h-10 w-10 text-lg text-center content-center border border-white rounded-full bg-amber-700 shadow-xl shadow-violet-300'>5</div>
              <div>
                <div className='text-white text-2xl font-bold'>Diverse Service Categories</div>
                <div className="text-slate-300 text-sm">Offers a wide array of local services for every need.</div>
                <img className='h-52 w-64 rounded-xl shadow-2xl shadow-white my-2' src="https://s3-alpha-sig.figma.com/img/3089/1c36/ee196d353eed738015674c1d157479c7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPbHBIqz~2PMfaT5x4rWsC8UL8ypOulOl0Is41LKjwzAJA74gl0WTF4TGuc4c9UJWjsfkXDpyN7l6x8uvRXjSi~6tZ-DTDO0gtqnXgr-PmVOGJSPAA7VL4j22g18BCjJp4QXLlGKOtFCuUQ93pojmglB7zst9GI3oKnTKbmNkR5OS10yuyYcJlORGRkYuYnDYcWX-5~aism1ZWlFvOaEcvPb49iBMDwxGz~tbW6a4idKX2pyZ78UyNawaK4~~~fygktbVKxAamSyk9C~-0Ar4fs9deu58etM4knHXvgNZvHaL~Cnp0L6IGnR6JB0PjIgcCjlPD5cMesIgznocrVznw__" alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>

         {/* section-4 */}
      <div className='h-3/4 bg-gradient-to-b from-pink-400 via-orange-200 to-red-900 py-10'>
        <div className='text-center text-amber-100 text-2xl'>TESTIMONIALS</div>
        <div className='flex justify-center text-4xl gap-2 font-bold pt-5 '>
          <div className='text-amber-400'>Loved</div>
          <div className='text-white'>Services By People.</div>
        </div>
        <div className='flex px-10 gap-32 justify-center pt-5'>
          <div className='h-64 w-64 border-0 bg-black rounded-lg '>
            <div className='h-16 w-16 bg-red-500 rounded-full flex justify-center  '>
              {/* <img src="" alt="" className=''/> */}
            </div>
            <div className='text-center'>
              <div className='rotate-180 text-7xl text-teal-300 flex justify-center'><PiQuotesFill /></div>

              <div className='text-white font-bold text-lg'>I couldn't be any happier. Highly recommended!</div>
              <div className='pt-3 '>
                <div className='text-slate-400 '>Navjyoti</div>
                <div className='text-slate-400'>Developer</div>
              </div>
            </div>
          </div>

          <div className='h-64 w-64 border-0 bg-black rounded-lg'>
            <div className='h-16 w-16 bg-red-500 rounded-full'>
              <img src="" alt="" />
            </div>
            <div className='text-center'>
              <div className='rotate-180 text-7xl text-teal-300 flex justify-center'><PiQuotesFill /></div>

              <div className='text-white font-bold text-lg'>Great service and custom service! Perfect!</div>
              <div className='pt-3 '>
                <div className='text-slate-400 '>Navya</div>
                <div className='text-slate-400'>UI/UX Designer</div>
              </div>

            </div>
          </div>

          <div className='h-64 w-64 border-0 bg-black rounded-lg'>
            <div className='h-16 w-16 bg-red-500 rounded-full '>
              <img src="" alt="" />
            </div>
            <div className='text-center'>
              <div className='rotate-180 text-7xl text-teal-300 flex justify-center'><PiQuotesFill /></div>

              <div className='text-white font-bold text-lg'>Perfect. Just perfect! I can’t say anything.</div>
              <div className='pt-3 '>
                <div className='text-slate-400 '>Aahana </div>
                <div className='text-slate-400'> HR Officer</div>
              </div>

            </div>
          </div>
        </div>
      </div>
       
       
       
       {/* footer */}
      <Footer />
    </>
  );
}

export default HomePage