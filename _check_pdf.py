import re, os
from pypdf import PdfReader
pdf='RB_Business_Profile.pdf'
print('pdf_exists', os.path.exists(pdf), 'size', os.path.getsize(pdf) if os.path.exists(pdf) else None)
if os.path.exists(pdf):
    r=PdfReader(pdf)
    text='\n'.join((p.extract_text() or '') for p in r.pages)
    for k in ['Fox','Eloff','Houghton','36 Houghton Drive','Houghton estate','Block D']:
        print(k, k.lower() in text.lower())
