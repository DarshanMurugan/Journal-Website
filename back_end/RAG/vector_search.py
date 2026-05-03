from RAG.embeddings import Embedder
import numpy as np
import heapq
class Finder():
    def __init__(self):
        self.client = Embedder()
        self.no_of_answers = 3

    
    def cosine_similarity(self,query_vec,entry_vec):
        return np.dot(query_vec, entry_vec) / (np.linalg.norm(query_vec) * np.linalg.norm(entry_vec))   
     
    def find(self,query,entry_id):
        answer_dict = {}
        from entries_back_end.models import Entries
        query_vector = self.client.embed(query)
        queryset = Entries.objects.filter(owner=entry_id).values("entry_vectors","entry_text")

        for entry in queryset:
            similarity = self.cosine_similarity(entry["entry_vectors"],query_vector)
            answer_dict[similarity] = entry["entry_text"]
            
        highest_similarity = heapq.nlargest(self.no_of_answers,answer_dict.keys())
        return [answer_dict[k] for k in highest_similarity]
