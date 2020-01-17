class Api::ScapesController < ApplicationController
  def index
    scapes = params[:bounds] ? Scape.in_bounds(params[:bounds]) : Scape.all
    scapes = params[:category] && params[:category] != 'all' ? scapes.where(category: params[:category]) : scapes
    @scapes = scapes.includes(:creator)
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

