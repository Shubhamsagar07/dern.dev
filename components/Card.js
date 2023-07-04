import Image from "next/image"


export default function Card(props) {
  return (
    <div className='dark:text-white shadow-3xl rounded-xl mb-7 pb-3'>
        <Image className="h-20 rounded-xl" src="https://img.freepik.com/free-vector/gradient-gaming-youtube-channel-art_23-2148878727.jpg?w=2000" width={200} height={100} />
        <div className="flex justify-evenly items-center my-3">
            <Image className="rounded-[50%]" src="https://img.freepik.com/free-vector/butterfly-logo-colorful-gradient-illustrations_483537-972.jpg?w=740&t=st=1688472502~exp=1688473102~hmac=44e9aee81b9c2514402c5ed056683f399efc458f5c86d43e5aea3a01ff3d9bb8" width={30} height={30}/>
            <p>Venom Tech</p>
            <p>600k</p>
        </div>
        <div className="w-full flex justify-center items-center">
            <button className="bg-[--primary-color] px-2 rounded-lg">
                Visit
            </button>
        </div>
    </div>
  )
}
