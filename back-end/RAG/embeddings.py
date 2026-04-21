from  sentence_transformers import SentenceTransformer
import threading
class Embedder:
    def __init__(self):
        self.model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
    
    def embed(self,sentences:list) -> list:
        return self.model.encode(sentences)
    
    def embed_in_background(self,entry_id,text):
        def task():
            from  .models import Entries
            
            vector = embed(text)

            Entries.objects.filter(id=entry_id).update(
                entry_vector=vector,
                is_embedded=True
            )
        threading.Thread(target=task).start()

