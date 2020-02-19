class Api::NotesController < ApplicationController
    before_action :require_logged_in

    def index
        @notes = current_user.notes
        render :index
    end

    def show
        @note = current_user.notes.find_by(id: params[:id])
    end

    def create
        @note = Note.new(note_params)
        if params[:note][:title] == ""
            @note.title = "Untitled Note"
        end
        
        @note.user = current_user
        if @note.save
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
        
    end

    def destroy
        @note = current_user.notes.find(params[:id])
        @note.destroy
        render :show
    end

    def update
        @note = current_user.notes.find_by(id: params[:id])
        if @note.update(note_params)
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    private

    def note_params
        params.require(:note).permit(:title, :body, :notebook_id, :user_id, :updated_at)
    end
end
