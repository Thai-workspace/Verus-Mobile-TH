# Verus Mobile 
กระเป๋าสตางค์หลายเหรียญสำหรับ iOS/Android Verus Mobile

ยินดีต้อนรับสู่ Verus Mobile เวอร์ชันทดสอบกระเป๋าสตางค์เข้ารหัสหลายสกุลเงิน! กระเป๋าเงินมือถือนี้จะเป็นฐานรหัสหลักสำหรับประสบการณ์มือถือ Verus รวมถึง PBaaS และการสนับสนุนแอปพลิเคชัน crypto ในอนาคต คุณสมบัติที่รวมอยู่ในขณะนี้คือ:

•รองรับหลายบัญชี ความสามารถในการใช้คีย์ที่แตกต่างกันในโทรศัพท์เครื่องเดียวกัน

• การรวมเครื่องสแกน VerusPay QR ทำให้ผู้ใช้สามารถเปลี่ยนจากการสแกนรหัส Verus QR เพื่อรับข้อความแจ้งธุรกรรมเพื่อยืนยันในขั้นตอนเดียว

•รองรับ 11 เหรียญที่แตกต่างกัน และอีกมากมายที่จะมาเร็ว ๆ นี้

• ความสามารถในการสร้างใบแจ้งหนี้ VerusPay ที่เข้ากันได้กับแอพ Verus Mobile

คุณสามารถรายงานจุดบกพร่อง ปัญหา หรือข้อเสนอแนะใดๆ ที่ค้นพบได้โดยการขอการสนับสนุนจากชุมชนในช่องทางมือถือของเราที่https://discord.gg/VRKMP2S หรือส่งอีเมลมาที่ development@veruscoin.ioสำหรับดุลยพินิจเพิ่มเติม

# Privacy Statement
No personal data is stored or collected by the Verus Mobile application, except as necessary for authentication. All authentication data is stored locally.

The Verus Mobile application uses the following permissions for the following reasons:

•Internet connectivity: In order to fetch and post data and communicate with the blockchain through Electrum servers, the app requires internet connectivity. The signing of transactions is done locally and private keys are not shared over any network.

•Access to system alerts: In order to notify the user of important ongoing events while using the Verus Mobile application, the Verus Mobile application uses the system alert framework on both iOS and Android.

•Camera and Audio access: The Verus Mobile application's VerusPay QR code scanner is designed to read and parse VerusQR codes, or VerusPay invoices through the camera, and requires camera access to work properly. The user will be prompted to allow camera access upon first opening the VerusPay feature. Due to the current constraints of the library being used for VerusPay, the user will be asked to enable audio by default when starting VerusPay for the first time. Choosing to disable audio should in no way affect VerusPay's functionality. 

•Permission to vibrate the mobile device: The Verus Mobile application uses the vibration feature of the mobile device it is running on for VerusPay, in order to give feedback upon the scan of a QR code invoice.

•Permission to read/write to phone memory: The Verus Mobile application uses the mobile devices AsyncStorage memory storage to hold encrypted account data while the application isn't running.

# Disclaimer

THIS IS EXPERIMENTAL SOFTWARE AND IT IS PROVIDED "AS IS" AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
