class Api::NotebooksController < ApplicationController
    before_action :require_logged_in

    def index
        @notebooks = Notebook.order('updated_at DESC').where(user_id: @current_user.id).includes(:notes)
        render :index
    end


    def show
        @notebooks = current_user.notebooks.find(params[:id])
        @notebook.author_id = current_user.id 
        @notes = @notebook.notes 
        if @notebook.save!
            render :show
        else
            render json:@notebook.errors.full_messages, status: 422
        end
    end

    def create
        @notebook = Notebook.new(notebook_params)
        @notebook.user = current_user
        if @notebook.save
            @notes = @notebook.notes
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def destroy
        @notebook = current_user.notebooks.find(params[:id])
        if current_user.notebooks.length == 1 
            render json: ["You must have at least one notebook"], status: 422 
        else 
            @notebook.destroy
            @notes = @notebook.notes
            render json: @notebook
        end
    end

    end

    def update
        @notebook = current_user.notebooks.find(params[:id])
        if @notebook.update(notebook_params)
            @notes = @notebook.notes
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end
    private
    def notebook_params
        params.require(:notebook).permit(:id, :title, :user_id, :updated_at)
    end
end
