class Api::NotebooksController < ApplicationController
    before_action :require_logged_in

    def index
        @notebooks = current_user.notebooks.sort_by { |notebook| notebook.title }
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
        @notebook.destroy

        render :show
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
        params.require(:notebook).permit(:title, :user_id, :updated_at)
    end
end
