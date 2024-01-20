import React from 'react'

const Home = () => {
    return (
        <>
            <div className=' flex flex-col align-middle items-center justify-center h-screen w-screen '>
                <div className=' flex flex-col bg-slate-600 items-center mb-4'>
                    <h1 className=' text-2xl font-bold text-blue-950'>Hello !!!</h1>
                    <h3>Check Boxes and click submit</h3>
                </div>
                <div className=''>
                    <form className='' action="">
                        <div className=' flex'>
                            <div className=' px-4'>
                                <input type="checkbox" name="Disease 1" id="checkbox1" className=' pr-2'/>
                                <label htmlFor="checkbox1">Disease 1</label>
                            </div>
                            <div className=' px-4'>
                                <input type="checkbox" name="Disease 1" id="checkbox1" />
                                <label htmlFor="checkbox1">Disease 1</label>
                            </div>
                            <div className=' px-4'>
                                <input type="checkbox" name="Disease 1" id="checkbox1" />
                                <label htmlFor="checkbox1">Disease 1</label>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Home