class Api::V1::TracksController < ApplicationController

    def index
        tracks = Track.all
        render json: tracks
    end 

    def show
        track = track.find_by(id: params[:id])
        render json: track
    end 
    
end
