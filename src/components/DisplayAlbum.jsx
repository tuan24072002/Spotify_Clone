import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams()
    const album = albumsData[id]
    const { playWithId } = useContext(PlayerContext)
    return (
        <>
            <Navbar />
            <div className={`mt-10 flex gap-8 flex-col md:flex-row md:items-end`}>
                <img src={album.image} alt="" className='w-48 rounded' />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{album.name}</h2>
                    <h4>{album.desc}</h4>
                    <p className='mt-1 flex gap-1 items-center'>
                        <img src={assets.spotify_logo} alt="" className='inline-block w-5' />
                        <span><b>Spotify</b> &bull; 1,323,154 likes &bull; 50 songs, about 2 hr 30 min</span>
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p><b className='mr-4'>#</b>Title</p>
                <p>Plays</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img src={assets.clock_icon} alt="" className='m-auto w-4' />
            </div>
            <hr />
            {
                songsData.map((item, index) => {
                    return (
                        <div className="grid grid-cols-4 sm:grid-cols-5 py-5 mb-4 px-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer" key={index} onClick={() => playWithId(item.id)}>
                            <p className='text-white'>
                                <span className='mr-4 text-[#a7a7a7]'>{index + 1}</span>
                                <img src={item.image} alt="" className='inline w-10 mr-2' />
                                <b>{item.name}</b>
                            </p>
                            <p>{item.plays}</p>
                            <p className='text-[15px]'>{album.name}</p>
                            <p className='text-[15px] hidden sm:block'>5 days ago</p>
                            <p className='text-[15px] text-center'>{item.duration}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DisplayAlbum