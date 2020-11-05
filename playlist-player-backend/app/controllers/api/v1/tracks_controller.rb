class Api::V1::TracksController < ApplicationController

    def index
        tracks = Track.all
        render json: tracks
    end 

    def show
        track = track.find_by(id: params[:id])
        render json: track
    end 

    def create 
        track = Track.new(track_params)
        if track.save
            render json: track
          else
            render json: track, status: 500
        end
    end 


    def track_params
        params.require(:track).permit(:title, :artist, :genre)
    end

    
end
