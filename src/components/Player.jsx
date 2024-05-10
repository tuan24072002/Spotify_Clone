import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    const { seekBar, seekBg, play, pause, playStatus, track, time, next, prev, seekSong } = useContext(PlayerContext)
    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className="hidden md:flex items-center gap-4">
                <img src={track.image} alt="" className='w-12' />
                <div className="">
                    <p>{track.name}</p>
                    <p>{track.desc}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img src={assets.shuffle_icon} alt="" className='w-4 cursor-pointer' />
                    <img src={assets.prev_icon} alt="" className='w-4 cursor-pointer' onClick={() => prev()} />
                    {
                        !playStatus ? <img onClick={() => play()} src={assets.play_icon} alt="" className='w-4 cursor-pointer' />
                            : <img onClick={() => pause()} src={assets.pause_icon} alt="" className='w-4 cursor-pointer' />
                    }
                    <img src={assets.next_icon} alt="" className='w-4 cursor-pointer' onClick={() => next()} />
                    <img src={assets.loop_icon} alt="" className='w-4 cursor-pointer' />
                </div>
                <div className="flex items-center gap-5">
                    <p>{time.currentTime.minute < 10 ? `0${time.currentTime.minute}` : time.currentTime.minute}:{time.currentTime.second < 10 ? `0${time.currentTime.second}` : time.currentTime.second}</p>
                    <div ref={seekBg} onClick={(e) => seekSong(e)} className="w-[60vw] md:w-[30vw] max-w-[500px] bg-gray-600 rounded-full cursor-pointer">
                        <hr ref={seekBar} className='border-none h-1 bg-gray-300 rounded-full' />
                    </div>
                    <p>{time.totalTime.minute < 10 ? `0${time.totalTime.minute}` : time.totalTime.minute}:{time.totalTime.second < 10 ? `0${time.totalTime.second}` : time.totalTime.second}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-4 opacity-75">
                <img src={assets.plays_icon} alt="" className='w-4' />
                <img src={assets.mic_icon} alt="" className='w-4' />
                <img src={assets.queue_icon} alt="" className='w-4' />
                <img src={assets.speaker_icon} alt="" className='w-4' />
                <img src={assets.volume_icon} alt="" className='w-4' />
                <div className="w-24 bg-gray-300 h-1 rounded">
                </div>
                <img src={assets.mini_player_icon} alt="" className='w-4' />
                <img src={assets.zoom_icon} alt="" className='w-4' />
            </div>
        </div>
    )
}

export default Player