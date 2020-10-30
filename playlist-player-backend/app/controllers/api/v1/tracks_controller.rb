class Api::V1::TracksController < ApplicationController

    def index
        tracks = Track.all
        render json: tracks
    end 

    def show
        track = track.find_by(spotify_id: params[:spotify_id])
        render json: track
    end 
    
end
