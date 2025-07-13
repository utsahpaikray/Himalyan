import { TestBed } from '@angular/core/testing';
import { MarkdownParserService } from './markdown-parser.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MarkdownParserService', () => {
  let service: MarkdownParserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarkdownParserService]
    });
    service = TestBed.inject(MarkdownParserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should parse magnet.md correctly', () => {
    const magnetMdContent = `
**ବିଦ୍ୟୁତ୍ ସ୍ରୋତର ଚୁମ୍ବକୀୟ ପ୍ରଭାବ (Magnetic Effects of Electric Current)**
--- MCQ section starts ---
### 100 MCQ ପ୍ରଶ୍ନ (4 ବିକଳ୍ପ ଏବଂ ଉତ୍ତର ସହିତ)
1.  ପରିବାହୀ ତାରରେ ବିଦ୍ୟୁତ୍ ପ୍ରବାହ ହେଲେ ତାହା କିପରି କାର୍ଯ୍ୟ କରେ?
    (a) ବିଦ୍ୟୁତ୍ ଉତ୍ସ ଭଳି
    (b) ଚୁମ୍ବକ ଭଳି
    (c) ତାପ ଉତ୍ସ ଭଳି
    (d) ଆଲୋକ ଉତ୍ସ ଭଳି
    **ଉତ୍ତର: (b) ଚୁମ୍ବକ ଭଳି**

2.  କେଉଁ ବୈଜ୍ଞାନିକ ପ୍ରଥମେ ଚୁମ୍ବକ ଏବଂ ବିଦ୍ୟୁତ୍ ପ୍ରବାହ ମଧ୍ୟରେ ସମ୍ପର୍କ ସ୍ଥାପନ କରିଥିଲେ?
    (a) ଆଲେସାଣ୍ଡ୍ରୋ ଭୋଲଟା
    (b) ହାନ୍ସ ଖ୍ରୀଷ୍ଟିଆନ୍ ଓରଷ୍ଟେଡ୍
    (c) ମାଇକେଲ ଫାରାଡେ
    (d) ଆଣ୍ଡ୍ରେ-ମ୍ୟାରି ଆମ୍ପିୟର
    **ଉତ୍ତର: (b) ହାନ୍ସ ଖ୍ରୀଷ୍ଟିଆନ୍ ଓରଷ୍ଟେଡ୍**

--- MCQ section End ---


--- shortQuestions Section starts ---
### 2 ମାର୍କ ପ୍ରଶ୍ନ ପାଇଁ ସ୍ୱଳ୍ପ ଟିପ୍ପଣୀ ଏବଂ ଉତ୍ତର

1.  **ବିଦ୍ୟୁତ୍ ସ୍ରୋତର ଚୁମ୍ବକୀୟ ପ୍ରଭାବ (Magnetic Effects of Electric Current) କ'ଣ?**
    **ଉତ୍ତର:** ପରିବାହୀ ତାରରେ ବିଦ୍ୟୁତ୍ ପ୍ରବାହ ହେଲେ ତାହା ଚୁମ୍ବକ ଭଳି କାର୍ଯ୍ୟ କରିବାକୁ ବିଦ୍ୟୁତ୍ ସ୍ରୋତର ଚୁମ୍ବକୀୟ ପ୍ରଭାବ କୁହାଯାଏ। ଏହା ଓରଷ୍ଟେଡ୍‌ଙ୍କ ଦ୍ୱାରା 1820 ମସିହାରେ ଆବିଷ୍କୃତ ହୋଇଥିଲା, ଯେତେବେଳେ ସେ ଲକ୍ଷ୍ୟ କରିଥିଲେ ଯେ ଏକ କମ୍ପାସ୍ ସୂଚୀ ବିଦ୍ୟୁତ୍ ପ୍ରବାହଧାରୀ ତାର ନିକଟରେ ବିକ୍ଷେପିତ ହେଉଛି ।

2.  **ଚୁମ୍ବକୀୟ କ୍ଷେତ୍ର (Magnetic Field) କାହାକୁ କହନ୍ତି?**
    **ଉତ୍ତର:** ଚୁମ୍ବକ ଚାରିପଟେ ଥିବା ଯେଉଁ ଅଞ୍ଚଳରେ ଚୁମ୍ବକର ପ୍ରଭାବ ଅନୁଭୂତ ହୁଏ ଏବଂ ଯେଉଁଠାରେ ଚୁମ୍ବକର ବଳ ନିର୍ଣ୍ଣୟ କରାଯାଇପାରେ, ତାହାକୁ ଚୁମ୍ବକୀୟ କ୍ଷେତ୍ର କୁହାଯାଏ। ଏହି କ୍ଷେତ୍ରର ତୀବ୍ରତା ଓ ଦିଗ ଉଭୟ ଥାଏ ।

--- shortQuestions Section End ---


--- longQuestions Section starts ---
### ଦୀର୍ଘ ପ୍ରଶ୍ନ ଏବଂ ଉତ୍ତର

1.  **ଓରଷ୍ଟେଡ୍‌ଙ୍କ ପରୀକ୍ଷା ଓ ଏହାର ଗୁରୁତ୍ୱ ବର୍ଣ୍ଣନା କର।**
    **ଉତ୍ତର:**
    **ଓରଷ୍ଟେଡ୍‌ଙ୍କ ପରୀକ୍ଷା:**
    1820 ମସିହାରେ ଡେନ୍‌ମାର୍କର ବୈଜ୍ଞାନିକ ହାନ୍ସ ଖ୍ରୀଷ୍ଟିଆନ୍ ଓରଷ୍ଟେଡ୍ ବିଦ୍ୟୁତ୍ ଓ ଚୁମ୍ବକତ୍ୱ ମଧ୍ୟରେ ଥିବା ସମ୍ପର୍କ ଆବିଷ୍କାର କରିଥିଲେ। ଦିନେ ସେ ଶ୍ରେଣୀରେ ବିଦ୍ୟୁତ୍ ବିଷୟରେ ପଢ଼ାଉଥିବା ବେଳେ ଏକ କମ୍ପାସ୍ ସୂଚୀ ନିକଟରେ ଥିବା ଏକ ଧାତବ ତାରରେ ବିଦ୍ୟୁତ୍ ପ୍ରବାହ କରାଇଥିଲେ। ତାରରେ ବିଦ୍ୟୁତ୍ ପ୍ରବାହ ହେବା ମାତ୍ରେ, କମ୍ପାସ୍ ସୂଚୀଟି ସଙ୍ଗେ ସଙ୍ଗେ ବିକ୍ଷେପିତ ହୋଇଥିଲା। ସେ ପୁଣି ଲକ୍ଷ୍ୟ କଲେ ଯେ ଯେତେବେଳେ ବିଦ୍ୟୁତ୍ ପ୍ରବାହ ବନ୍ଦ ହୋଇଗଲା, କମ୍ପାସ୍ ସୂଚୀ ପୁନର୍ବାର ତା'ର ପୂର୍ବ ଅବସ୍ଥାକୁ ଫେରିଆସିଲା [୨ (ଅନ୍ତର୍ନିହିତ)]। ଏହି ପରୀକ୍ଷାକୁ ବୁଝିବା ପାଇଁ ଏକ ସରଳ ପରୀକ୍ଷା କରାଯାଇପାରେ:
    *   ଏକ ମୋଟା ତମ୍ବା ତାରକୁ ବିଦ୍ୟୁତ୍ ପରିପଥର ଦୁଇ ବିନ୍ଦୁ X ଓ Y ମଧ୍ୟରେ କାଗଜ ପୃଷ୍ଠତଳ ସହିତ ଲମ୍ବ ଭାବେ ରଖ।
    *   କାଗଜ ଉପରେ ଏକ ଛୋଟ କମ୍ପାସ୍ ତାର ପାଖାପାଖି ରଖି ସୂଚୀର ଅବସ୍ଥିତି ଲକ୍ଷ୍ୟ କର। (କମ୍ପାସ୍ ସୂଚୀ ଏକ ଛୋଟ ଚୁମ୍ବକ।)
    *   ପରିପଥକୁ ମୁଦ୍ରିତ କରି ବିଦ୍ୟୁତ୍ ପ୍ରବାହ କରାଇଲେ, କମ୍ପାସ୍ ସୂଚୀରେ ବିକ୍ଷେପ ହୁଏ।
    *   ଯଦି ବିଦ୍ୟୁତ୍ ପ୍ରବାହର ଦିଗ ଓଲଟାଇ ଦିଆଯାଏ, ତେବେ କମ୍ପାସ୍ ସୂଚୀର ବିକ୍ଷେପ ଦିଗ ମଧ୍ୟ ଓଲଟିଯାଏ।

    **ଗୁରୁତ୍ୱ:**
    ଓରଷ୍ଟେଡ୍‌ଙ୍କ ଏହି ଆବିଷ୍କାର ଏକ ଯୁଗାନ୍ତକାରୀ ଘଟଣା ଥିଲା। ଏହା ପୂର୍ବରୁ ବୈଜ୍ଞାନିକମାନେ ଚୁମ୍ବକତ୍ୱ ଓ ବିଦ୍ୟୁତ୍ ପ୍ରବାହକୁ ଦୁଇଟି ଭିନ୍ନ ବିଷୟ ଭାବେ ଧରି ନେଇଥିଲେ। କିନ୍ତୁ ଓରଷ୍ଟେଡ୍ ପ୍ରମାଣ କଲେ ଯେ ବିଦ୍ୟୁତ୍ ପ୍ରବାହ ହେତୁ ଏକ ଚୁମ୍ବକୀୟ କ୍ଷେତ୍ର ସୃଷ୍ଟି ହୁଏ ଏବଂ ବିଦ୍ୟୁତ୍ ପ୍ରବାହଧାରୀ ତାର ଚୁମ୍ବକ ଭଳି କାର୍ଯ୍ୟ କରେ। ଏହି ଆବିଷ୍କାର ବିଦ୍ୟୁତ୍ ପ୍ରବାହ ଓ ଚୁମ୍ବକତ୍ୱ ମଧ୍ୟରେ ସମ୍ପର୍କ ସ୍ଥାପନ କରିଥିଲା ଏବଂ ବିଜ୍ଞାନରେ ଏହାକୁ ଏକ ଅତି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ବିଷୟ ଭାବେ ବିବେଚନା କରାଗଲା। ଏହା ପରବର୍ତ୍ତୀ ସମୟରେ ବିଦ୍ୟୁତ୍ ମୋଟର (Motor) ଓ ଜେନେରେଟର (Generator) ଭଳି ବ୍ୟାବହାରିକ ଯନ୍ତ୍ରପାତିର ବିକାଶ ପାଇଁ ମାର୍ଗ ପ୍ରଶସ୍ତ କରିଥିଲା।

--- longQuestions Section End ---
    `;

    const parsedData = service.parse(magnetMdContent);
    const topicTitle = 'ବିଦ୍ୟୁତ୍ ସ୍ରୋତର ଚୁମ୍ବକୀୟ ପ୍ରଭାବ (Magnetic Effects of Electric Current)';

    expect(parsedData.topics[topicTitle]).toBeDefined();
    const topic = parsedData.topics[topicTitle];

    // Test Notes
    expect(topic.notes.length).toBe(0); // No explicit notes in magnet.md

    // Test MCQs
    expect(topic.multipleChoiceQuestions.length).toBe(2);
    expect(topic.multipleChoiceQuestions[0].question).toContain('ପରିବାହୀ ତାରରେ ବିଦ୍ୟୁତ୍ ପ୍ରବାହ ହେଲେ ତାହା କିପରି କାର୍ଯ୍ୟ କରେ?');
    expect(topic.multipleChoiceQuestions[0].options.length).toBe(4);
    expect(topic.multipleChoiceQuestions[0].correct).toBe(1); // (b) is the second option (index 1)

    // Test Short Questions
    expect(topic.shortQuestions.length).toBe(2);
    expect(topic.shortQuestions[0].question).toContain('ବିଦ୍ୟୁତ୍ ସ୍ରୋତର ଚୁମ୍ବକୀୟ ପ୍ରଭାବ (Magnetic Effects of Electric Current) କ\'ଣ?');
    expect(topic.shortQuestions[0].answer).toContain('ପରିବାହୀ ତାରରେ ବିଦ୍ୟୁତ୍ ପ୍ରବାହ ହେଲେ ତାହା ଚୁମ୍ବକ ଭଳି କାର୍ଯ୍ୟ କରିବାକୁ ବିଦ୍ୟୁତ୍ ସ୍ରୋତର ଚୁମ୍ବକୀୟ ପ୍ରଭାବ କୁହାଯାଏ।');

    // Test Long Questions
    expect(topic.longQuestions.length).toBe(1);
    expect(topic.longQuestions[0].question).toContain('ଓରଷ୍ଟେଡ୍‌ଙ୍କ ପରୀକ୍ଷା ଓ ଏହାର ଗୁରୁତ୍ୱ ବର୍ଣ୍ଣନା କର।');
    expect(topic.longQuestions[0].answer).toContain('1820 ମସିହାରେ ଡେନ୍‌ମାର୍କର ବୈଜ୍ଞାନିକ ହାନ୍ସ ଖ୍ରୀଷ୍ଟିଆନ୍ ଓରଷ୍ଟେଡ୍ ବିଦ୍ୟୁତ୍ ଓ ଚୁମ୍ବକତ୍ୱ ମଧ୍ୟରେ ଥିବା ସମ୍ପର୍କ ଆବିଷ୍କାର କରିଥିଲେ।');
  });
});