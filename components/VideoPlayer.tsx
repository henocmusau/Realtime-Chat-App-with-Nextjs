'use client'
import useVideo from '@/hooks/useVideo'
<<<<<<< HEAD
import React from 'react'

export default function VideoPlayer() {
    const { videoRef, error } = useVideo()
    return (
        <>
            {error.state ? <p className='p-3 my-3 text-lg font-normal rounded-lg bg-red-200'>Une erreur est survenur : {error.msg}</p> : null}
            <video playsInline autoPlay muted ref={videoRef} className='min-w-[500px] h-[80vh] aspect-video rounded-lg shadow-md' />
        </>
=======
import useWebcam from '@/hooks/useWebcam'
import Image from 'next/image'
import React from 'react'

export default function VideoPlayer() {
    const { videoRef, error, canvasRef, photoRef, takePicture } = useWebcam()
    return (
        <section className='h-full w-full flex-col flex items-center justify-center'>
            {error.state ? <p className='p-3 my-3 text-lg font-normal rounded-lg bg-red-200'>Une erreur est survenue : {error.msg}</p> : null}
            <h2 className='font-semibold text-2xl mb-4'>My video Player</h2>
            <video playsInline autoPlay muted ref={videoRef} className='min-w-[400px] h-[60vh] aspect-video rounded-lg shadow-md'>
                Oups ! La balise vidéo n'est pas supportée par votre navigateur.
            </video>
            <button onClick={takePicture} className='primaryBtn'>Capturer</button>
            <canvas id='canvas' className='hidden' ref={canvasRef}></canvas>
            {!error.state ? <Image alt='' src={''} ref={photoRef} /> : null}
        </section>
>>>>>>> videoPlayer
    )
}
