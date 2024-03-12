import React, { useEffect, useRef, useState } from 'react';

const tracks = [
    {
        title: 'Track 1',
        source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Track 2',
        source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        image: 'https://via.placeholder.com/150',
    },
    // Add more tracks as needed
];

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentMusicTrack, setCurrentMusicTrack] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);

    const audioRef = useRef();

    useEffect(() => {
        if (isPlaying) {
            const intervalId = setInterval(() => {
                setTrackProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [isPlaying]);

    function handlePauseAndPlay() {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    function handleSkipTrack(direction) {
        if (direction === 'backward') {
            setCurrentMusicTrack((prev) => (prev + 1) % tracks.length);
            setIsPlaying(false);
        } else {
            setCurrentMusicTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
            setIsPlaying(false);
        }
    }

    function handleTrackProgress(e) {
        const progress = parseFloat(e.target.value);
        setTrackProgress(progress);
        audioRef.current.currentTime = (progress / 100) * audioRef.current?.duration;
    }

    return (
        <div className='wrapper'>
            <h2>Music Player</h2>
            <div className='music-player'>
                <h3>{tracks[currentMusicTrack].title}</h3>
                <img src={tracks[currentMusicTrack].image} alt='image' />
                <audio ref={audioRef} src={tracks[currentMusicTrack].source}></audio>
                <input
                    type='range'
                    max={100}
                    min={0}
                    name='range'
                    value={trackProgress}
                    onChange={handleTrackProgress}
                    className='progress'
                    style={{ background: isPlaying ? 'green' : '#444', width: '90%' }}
                />
                <p>
                    {(audioRef?.current?.duration / 60)?.toFixed(2) || '#NA'} /{' '}
                    {(audioRef?.current?.currentTime / 60)?.toFixed(2) || '#NA'}
                </p>
                <div className='track-controls'>
                    <button onClick={() => handleSkipTrack('backward')}>Backward</button>
                    <button onClick={handlePauseAndPlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                    <button onClick={() => handleSkipTrack('forward')}>Forward</button>
                </div>
            </div>
        </div>
    );
}
