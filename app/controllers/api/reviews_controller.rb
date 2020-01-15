# class Api::ReviewsController < ApplicationController
#   before_action :require_logged_in

#   def create
#     @review = current_user.reviews.new(review_params)

#     if @review.save
#       render :show
#     else
#       render json: @revew, status: :unprocessable_entity
#     end
#   end

#   private
#   def review_params
#     params.require(:review).permit(:body, :user_id, :scape_id)
#   end
# end
