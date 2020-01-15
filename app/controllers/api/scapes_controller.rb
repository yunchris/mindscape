class Api::ScapesController < ApplicationController
  def index
    @scapes = Scape.includes(:creator).all
    render :index
  end
  
  def show
    @scape = Scape.find_by(id: params[:id])
    render :show
  end

  def create
    @scape = Scape.create(scape_params)
    render :show
  end

  private
  def scape_params
    params.require(:scape).permit(
      :name, 
      :category,
      :description,
      :lat, 
      :lng, 
      :daily_price,
      :creator_id)
  end
end

