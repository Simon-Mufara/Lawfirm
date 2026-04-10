import zipfile, os
src = r'archive\\RB_Business_Profile.docx'
out = r'RB_Business_Profile.docx'
repls = [
    ('127 Fox Street & Eloff Street', '36 Houghton drive Houghton estate block D'),
    ('127 Fox St & Eloff St', '36 Houghton drive Houghton estate block D'),
    ('Fox Street & Eloff Street', 'Houghton drive Houghton estate block D'),
    ('Johannesburg CBD 2000', 'Johannesburg, Gauteng'),
    ('Johannesburg CBD', 'Houghton Estate, Johannesburg'),
]
with zipfile.ZipFile(src, 'r') as zin:
    with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            if item.filename.startswith('word/') and item.filename.endswith('.xml'):
                text = data.decode('utf-8', 'ignore')
                for a,b in repls:
                    text = text.replace(a,b)
                data = text.encode('utf-8')
            zout.writestr(item, data)

# verify terms in document xml
with zipfile.ZipFile(out, 'r') as z:
    xml = z.read('word/document.xml').decode('utf-8', 'ignore').lower()
    for k in ['fox','eloff','houghton','block d','36 houghton']:
        print(f'{k}={k in xml}')
print('saved', out, os.path.getsize(out))
