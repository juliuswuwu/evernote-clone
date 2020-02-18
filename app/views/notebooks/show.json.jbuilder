json.notebook do 
    json.partial! "api/notebooks/notebook", notebook: @notebook
end

json.notes do
    @notes.each do |note| 
        json.set! note.id do 
            json.extract! note, :id, :title, :body, :updated_at, :notebook_id
        end
    end
end