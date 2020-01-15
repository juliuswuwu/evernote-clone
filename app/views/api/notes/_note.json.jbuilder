json.extract! note, :id, :title, :body, :user_id, :notebook_id

json.updated_at note.updated_at.to_f * 1000
json.created_at note.updated_at.to_f * 1000