json.extract! note, :id, :title, :body, :user_id, :notebook_id

json.update_at note.updated_at.to_f * 1000
json.created_at note.update_at.to_f * 1000