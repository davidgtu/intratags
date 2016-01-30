class TagsController < ApplicationController
  before_action :set_tag, only: [:show, :edit, :update, :destroy]
  respond_to :json

  def index
    @tags = Tag.all
  end

  def show
    @tag = Tag.find(params[:id])
  end

  def new
    @tag = Tag.new
  end

  def edit
    @tag = Tag.find(params[:id])
  end

  def create
    # @tag = Tag.new(tag_params)
    tag = Tag.create!(tag_params)
    render json: tag, status: 201
  end

  def update
    tag.update_attributes(tag_params)
    render json: tag, status: 201
  end

  def destroy
    @tag.destroy
    render json: @tag, status: 201
  end

  private
    def set_tag
      @tag = Tag.find(params[:id])
    end

    def tag_params
      params.require(:tag).permit(:name, :color, :order)
    end
end
