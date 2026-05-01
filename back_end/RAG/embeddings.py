from sentence_transformers import SentenceTransformer

_model = None

def get_model():
    global _model
    if _model is None:
        _model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
    return _model


class Embedder:
    def __init__(self):
        self.model = get_model()
    
    def embed(self, sentences: list):
        return self.model.encode(sentences)
